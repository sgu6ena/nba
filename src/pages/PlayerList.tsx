import * as React from "react";
import {useAppDispatch, useAppSelector} from "../core/redux/redux";
import {IPlayer} from "../modules/players/interfaces/IPlayer";
import Card from "../common/components/card/Card";
import LayerPage from "../common/components/LayerPage";
import Spinner from "../common/ui/spinner/spinner";
import ImageBox from "../common/components/image-box/ImageBox";
import {ReactComponent as BasketMan} from "../assets/images/Basket-man.svg";

import ReactPaginate from "react-paginate";
import styled from "styled-components";
import {useState} from "react";
import {fetchPlayers} from "../modules/players/playerSlice";

export interface IPlayerListProps {
}

export function PlayerList(props: IPlayerListProps) {

    const [currentPage, setCurrentPage] = useState(1);
    const [playersPerPage, setplayersPerPage] = useState(6);

    const dispatch = useAppDispatch();
    const {players, isLoading, error} = useAppSelector(
        (state) => state.playerReducer
    );

    React.useEffect(() => {
        dispatch(fetchPlayers());
    }, []);

    const handlePageClick = (e: any) => {
        const selectedPage = e.selected;
        setCurrentPage(selectedPage + 1)
    };

    const indexOfLastTeam = currentPage * playersPerPage;
    const indexOfFirstTeam = indexOfLastTeam - playersPerPage;
    const currentPlayers = players.slice(indexOfFirstTeam, indexOfLastTeam)

    return (
        <LayerPage search paginate>
            {isLoading && <Spinner/>}
            {error}

            {players.length ? (
                <>
                    <FlexBox>
                        {currentPlayers.map((player: IPlayer) => (
                            <Card
                                title={player.name}
                                subtitle={player.position}
                                type="player"
                                avatarUrl={player.avatarUrl}
                                key={player.id}
                                id={player.id}
                            />
                        ))}
                    </FlexBox>
                    <FlexBox>
                        <ReactPaginate onPageChange={handlePageClick}
                                       pageCount={Math.ceil(players.length / playersPerPage)}
                                       containerClassName={"pagination"}
                                       activeClassName={"active"}
                                       previousLabel={"❮"}
                                       nextLabel={"❯"}
                        />
                    </FlexBox>
                </>
            ) : (
                <div style={{margin: "auto"}}>
                    <ImageBox
                        title="Empty here"
                        description="Add new players to continue"
                    >
                        <BasketMan width="200px" height="auto"/>
                    </ImageBox></div>
            )}


        </LayerPage>
    );
}

const FlexBox = styled.div`
  display: flex;
  gap: 2em;
  flex-wrap: wrap;
`