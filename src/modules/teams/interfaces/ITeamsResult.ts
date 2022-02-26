import {ITeam} from "./ITeam";

export interface ITeamsResult {
    data: ITeam[];
    count: number
    page: number;
    size: number;
};