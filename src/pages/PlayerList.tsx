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
import SearchInput from "../common/ui/SearchInput";
import {Link} from "react-router-dom";
import Button from "../common/ui/button/Button";
import * as sizes from "../common/variables/sizes";
import CustomSelect from "../common/ui/CustomSelect/CustomSelect";

const pages = [{value: '6', label: '6'}, {value: '12', label: '12'}, {value: '24', label: '24'}];

export function PlayerList() {

    const [currentPage, setCurrentPage] = useState(1);
    const [playersPerPage, setplayersPerPage] = useState(6);
    const [search, setSearch] = useState('');


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
    const filterPlayers = players.filter(item => item.name.toUpperCase().includes(search));
    const indexOfLastTeam = currentPage * playersPerPage;
    const indexOfFirstTeam = indexOfLastTeam - playersPerPage;
    const currentPlayers = filterPlayers.slice(indexOfFirstTeam, indexOfLastTeam)

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value.toUpperCase());
    }
    const pageChange = (e: any) => {
        setplayersPerPage(e.value)
    }
    return (
        <LayerPage >
            {isLoading && <Spinner/>}
            {error}
            <Panel>
                <SearchInput placeholder="Search..." onChange={handleChange} />
                <Link to="add"><Button>Add&nbsp;＋</Button></Link>
            </Panel>
            {filterPlayers.length ? (
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
                    <FlexPage>
                        <ReactPaginate onPageChange={handlePageClick}
                                       pageCount={Math.ceil(filterPlayers.length / playersPerPage)}
                                       containerClassName={"pagination"}
                                       activeClassName={"active"}
                                       previousLabel={"❮"}
                                       nextLabel={"❯"}
                        />
                        <CustomSelect pages  value={pages[0]} onChange={pageChange} options={pages} placeholder={playersPerPage.toString()} />
                    </FlexPage>
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
  justify-content: flex-start;
  align-items: center;
`;

const FlexPage = styled(FlexBox)`
  justify-content: space-between;
`
const Panel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  @media (max-width: ${sizes.$sm}) {
    flex-direction: column;
  }
`;