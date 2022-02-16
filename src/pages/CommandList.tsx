import * as React from "react";

import Card from "../common/components/card/Card";
import LayerPage from "../common/components/LayerPage";
import {useAppDispatch, useAppSelector} from "../core/redux/redux";

import Spinner from "../common/ui/spinner/spinner";
// import {fetchTeams} from "../modules/teams/action";
import {useState} from "react";

import ReactPaginate from "react-paginate";
import styled from "styled-components";
import {fetchTeams} from "../modules/teams/teamSlice";
import ImageBox from "../common/components/image-box/ImageBox";
import {ReactComponent as BasketUp} from "../assets/images/Basket-up.svg";

export interface ICommandListProps {
}

export function CommandList(props: ICommandListProps) {

    const [currentPage, setCurrentPage] = useState(1);
    const [teamsPerPage, setTeamsPerPage] = useState(6);

    const dispatch = useAppDispatch();
    const {teams, isLoading, error} = useAppSelector(
        (state) => state.teamReducer
    );

    React.useEffect(() => {
        dispatch(fetchTeams());
    }, [dispatch]);

    const indexOfLastTeam = currentPage * teamsPerPage;
    const indexOfFirstTeam = indexOfLastTeam - teamsPerPage;
    const currentTeams = teams.slice(indexOfFirstTeam, indexOfLastTeam)

    const handlePageClick = (e: any) => {
        const selectedPage = e.selected;
        setCurrentPage(selectedPage + 1)
    };


    return (
        <LayerPage search paginate>
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

                    <FlexBox>
                        <ReactPaginate onPageChange={handlePageClick}
                                       pageCount={Math.ceil(teams.length / teamsPerPage)}
                                       containerClassName={"pagination"}
                                       activeClassName={"active"}
                                       previousLabel={"❮"}
                                       nextLabel={"❯"}
                        />
                    </FlexBox></>)
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
`