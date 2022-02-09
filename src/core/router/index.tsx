import React from "react";
import {RouteNames} from "../../common/variables/RouteNames";

import {Command} from "../../pages/Command";
import {CommandList} from "../../pages/CommandList";
import {PageNotFound} from "../../pages/PageNotFound";
import {Player} from "../../pages/Player";
import {PlayerAdd} from "../../pages/PlayerAdd";
import {PlayerList} from "../../pages/PlayerList";
import {TeamAdd} from "../../pages/TeamAdd";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Welcome from "../../pages/Welcome";
import {PlayerEdit} from "../../pages/PlayerEdit";


export interface IRoute {
    path: string;
    element: React.ReactElement;
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.LOGIN, element: <Login/>},
    {path: RouteNames.REGISTER, element: <Register/>},
    {path: "*", element: <Login/>},
];

export const privateRoutes: IRoute[] = [
    {path: RouteNames.TEAMS, element: <CommandList/>},
    {path: RouteNames.TEAM, element: <Command/>},
    {path: RouteNames.PLAYERS, element: <PlayerList/>},
    {path: RouteNames.PLAYER, element: <Player/>},
    {path: "*", element: <PageNotFound/>},
    {path: RouteNames.HOME, element: <Welcome/>},
    {path: RouteNames.PLAYER_ADD, element: <PlayerAdd/>},
    {path: RouteNames.TEAM_ADD, element: <TeamAdd/>},
    {path: RouteNames.PLAYER_EDIT, element: <PlayerEdit/>},

];
