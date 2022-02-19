import * as React from "react";

import Card from "../common/components/card/Card";
import LayerPage from "../common/components/LayerPage";
import {useAppDispatch, useAppSelector} from "../core/redux/redux";

import Spinner from "../common/ui/spinner/spinner";
import {EventHandler, HTMLProps, useEffect, useRef, useState} from "react";

import ReactPaginate from "react-paginate";
import styled from "styled-components";
import {fetchTeams} from "../modules/teams/teamSlice";
import ImageBox from "../common/components/image-box/ImageBox";
import {ReactComponent as BasketUp} from "../assets/images/Basket-up.svg";
import SearchInput from "../common/ui/SearchInput";
import {Link} from "react-router-dom";
import Button from "../common/ui/button/Button";
import * as sizes from "../common/variables/sizes";
import CustomSelect from "../common/ui/CustomSelect/CustomSelect";

const pages = [{value: '6', label: '6'}, {value: '12', label: '12'}, {value: '24', label: '24'}];

export function CommandList() {

    const [currentPage, setCurrentPage] = useState(1);
    const [teamsPerPage, setTeamsPerPage] = useState(6);
    const [search, setSearch] = useState('');

    const dispatch = useAppDispatch();
    const {teams, isLoading, error} = useAppSelector(
        (state) => state.teamReducer
    );

    React.useEffect(() => {
        dispatch(fetchTeams());
    }, [dispatch]);

    const filterTeams = teams.filter(item => item.name.toUpperCase().includes(search));
    const indexOfLastTeam = currentPage * teamsPerPage;
    const indexOfFirstTeam = indexOfLastTeam - teamsPerPage;
    const currentTeams = filterTeams.slice(indexOfFirstTeam, indexOfLastTeam)

    const handlePageClick = (e: any) => {
        const selectedPage = e.selected;
        setCurrentPage(selectedPage + 1)
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value.toUpperCase());
    }

    const pageChange = (e: any) => {
        setTeamsPerPage(e.value)
    }
    return (
        <LayerPage>
            <Panel>
                <SearchInput placeholder="Search..." onChange={handleChange}/>
                <Link to="add"><Button>Add&nbsp;＋</Button></Link>
            </Panel>
            {isLoading && <Spinner/>}
            {error}
            {teams.length ? (<>
                    <FlexBox>
                        {currentTeams.map((team: any) => (
                            <Card
                                title={team.name}
                                subtitle={
                                    team.foundationYear ?? `Year of foundation: ${team.foundationYear}`
                                }
                                type="command"
                                avatarUrl={team.imageUrl}
                                key={team.id}
                                id={team.id}
                            />
                        ))}
                    </FlexBox>

                    <FlexPage>
                        <ReactPaginate onPageChange={handlePageClick}
                                       pageCount={Math.ceil(filterTeams.length / teamsPerPage)}
                                       containerClassName={"pagination"}
                                       activeClassName={"active"}
                                       previousLabel={"❮"}
                                       nextLabel={"❯"}
                        />
                        <CustomSelect pages  value={pages[0]} onChange={pageChange} options={pages} placeholder={teamsPerPage.toString()} />

                    </FlexPage></>)
                :
                (
                    <div style={{margin: "auto"}}>
                        <ImageBox
                            title="Empty here"
                            description="Add new teams to continue"
                        >
                            <BasketUp width="100%" height="auto"/>
                        </ImageBox>
                    </div>
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