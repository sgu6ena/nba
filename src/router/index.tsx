import React from "react";
import {Command} from "../pages/Command";
import {CommandList} from "../pages/CommandList";
import Login from "../pages/Login";
import {PageNotFound} from "../pages/PageNotFound";
import {Player} from "../pages/Player";
import {PlayerList} from "../pages/PlayerList";
import Register from "../pages/Register";
import Welcome from "../pages/Welcome";


export interface IRoute {
    path: string;
    element: React.ReactElement;
}

export enum RouteNames {
    LOGIN = "/login",
    REGISTER = "/register",
    TEAMS = "/commands",
    TEAM = "/commands/:id",
    PLAYERS = "/players",
    PLAYER = "/players/:id",
    HOME = "/"
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.LOGIN, element: < Login />},
    {path: RouteNames.REGISTER, element: <Register/>},
    {path: "*", element: <Login/>}
];

export const privateRoutes: IRoute[] = [
    {path: RouteNames.TEAMS, element: < CommandList/>},
    {path: RouteNames.TEAM, element: < Command/>},
    {path: RouteNames.PLAYERS, element: <PlayerList/>},
    {path: RouteNames.PLAYER, element: <Player/>},
    {path: "*", element: <PageNotFound/>},
    {path: RouteNames.HOME, element: <Welcome />}
];
