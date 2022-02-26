import {IPlayer} from "./IPlayer";

export interface IPlayerResult {
    data: IPlayer[];
    count: number
    page: number;
    size: number;
};