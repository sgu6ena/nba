import React from "react";
import { Command } from "../pages/Command";
import { CommandList } from "../pages/CommandList";
import Login from "../pages/Login";
import { PageNotFound } from "../pages/PageNotFound";
import { Player } from "../pages/Player";
import { PlayerList } from "../pages/PlayerList";
import Register from "../pages/Register";

export interface IRoute{
    path:string;
    element: React.ComponentType;
}

export const publicRoutes: IRoute[] =[
    {path: "/login", element:Login},
    {path:"/register", element:Register } 
]


export const privateRoutes: IRoute[] = [
    {path:"/commands", element:CommandList},
    {path:"/command/:id", element:Command },
    {path:"/players", element:PlayerList },
    {path:"/players/:id", element:Player } ,
    {path:"*", element:PageNotFound }
]

