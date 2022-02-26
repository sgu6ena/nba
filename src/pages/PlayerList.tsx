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
import {fetchPlayers, fetchPlayersByName} from "../modules/players/playerSlice";
import SearchInput from "../common/ui/SearchInput";
import {Link} from "react-router-dom";
import Button from "../common/ui/button/Button";
import * as sizes from "../common/variables/sizes";
import CustomSelect from "../common/ui/CustomSelect/CustomSelect";
import {fetchTeamsByName} from "../modules/teams/teamSlice";


const pages = [{value: '6', label: '6'}, {value: '12', label: '12'}, {value: '24', label: '24'}];

export function PlayerList() {

    const [currentPage, setCurrentPage] = useState(1);
    const [playersPerPage, setPlayersPerPage] = useState(6);
    const dispatch = useAppDispatch();

    const {players, isLoading, error, count} = useAppSelector(
        (state) => state.playerReducer
    );


    React.useEffect(() => {
        dispatch(fetchPlayers({page: currentPage, size: playersPerPage}));
    }, [currentPage, playersPerPage]);

    const handlePageClick = (e: any) => {
        const selectedPage = e.selected;
        setCurrentPage(selectedPage + 1)
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(fetchPlayersByName({name: e.target.value, page: currentPage, size: playersPerPage}));
    }

    const pageChange = (e: any) => {
        setPlayersPerPage(e.value)
    }


    return (
        <LayerPage>
            {isLoading && <Spinner/>}
            {error}
            <FlexBox>
                <SearchInput placeholder="Search..." onChange={handleChange}/>
                <Link to="add"><Button>Add&nbsp;＋</Button></Link>
            </FlexBox>
            {players.length ? (
                <>
                    <Grid>
                        {players.map((player: IPlayer) => (
                            <Card
                                title={player.name}
                                subtitle={player.position}
                                type="player"
                                avatarUrl={player.avatarUrl}
                                key={player.id}
                                id={player.id}
                            />
                        ))}
                    </Grid>
                    <FlexBox>
                        <ReactPaginate onPageChange={handlePageClick}
                                       pageCount={Math.ceil(count / playersPerPage)}
                                       containerClassName={"pagination"}
                                       activeClassName={"active"}
                                       previousLabel={"❮"}
                                       nextLabel={"❯"}
                        />
                        <CustomSelect pages value={pages[0]} onChange={pageChange} options={pages}
                                      placeholder={playersPerPage.toString()}/>
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
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${sizes.$md}) {
    flex-direction: column;
    a {
      width: 100%;

      button {
        width: 100%;
      }
    }


`;
const Grid = styled.div`
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: ${sizes.$xl}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${sizes.$sm}) {
    grid-template-columns: repeat(1, 1fr);
  }
`
