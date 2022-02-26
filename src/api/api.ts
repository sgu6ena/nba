import {store} from '../App'
import errors from "./apiErrors"
import {IPlayer} from "../modules/players/interfaces/IPlayer";
import {ITeam} from "../modules/teams/interfaces/ITeam";

export default class ApiService {

    _apiBaseUrl = process.env.REACT_APP_API_URL;

    headers: any = () => ({
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${store.getState().userReducer.token}`,
        cors: "no-cors",
    });

    getResource = async (url: string) => {
        const res = await fetch(`${this._apiBaseUrl}${url}`, {
            headers: this.headers(),
            method: "GET",
        });

        if (!res.ok) {
            if (errors[res.status]) {
                throw new Error(errors[res.status]);
            } else
                throw new Error(
                    `Could not fetch resource: ${url} - status: ${res.status}`
                );
        }

        return await res.json();
    };

    postResource = async (url: string, data: any = {}, method: string = "POST") => {
        const res = await fetch(`${this._apiBaseUrl}${url}`, {
            headers: this.headers(),
            method: method,
            body: JSON.stringify(data),
        });

        if (!res.ok) {
            if (errors[res.status]) {
                throw new Error(errors[res.status]);
            } else
                throw new Error(
                    `Could not fetch resource: ${url} - status: ${res.status}`
                );
        }

        return await res.json();
    };


    _postImage = async (url: string, data: any) => {
        const res = await fetch(`${this._apiBaseUrl}${url}`, {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${store.getState().userReducer.token}`,
                cors: "no-cors",
            },
            method: "POST",
            body: data,
        });

        if (!res.ok) {
            if (errors[res.status]) {
                throw new Error(errors[res.status]);
            } else
                throw new Error(
                    `Could not fetch resource: ${url} - status: ${res.status}`
                );
        }

        return await res.json();
    };

    postImage = async (data: Blob) => {
        const formData = new FormData();
        formData.append('file', data ? data : '');
        return await this._postImage('/api/Image/SaveImage', formData);
    }


    getPing = async () => {
        return await api.getResource(`/api/echo/ping`);

    };
    getVersion = async () => {
        return await this.getResource(`/api/echo/version`);
    };


    postLogin = async (login: string, pass: string) => {
        return await this.postResource(`/api/Auth/SignIn`, {
            login: login,
            password: pass,
        });
    };

    postRegister = async (login: string, pass: string, userName: string) => {
        return await this.postResource(`/api/Auth/SignUp`, {
            userName: userName,
            login: login,
            password: pass,
        });
    };


    getTeams = async (page: number = 1, size: number = 6) => {
        return await this.getResource(`/api/Team/GetTeams?Page=${page}&PageSize=${size}`);
    };

    getTeam = async (id: string = '') => {
        return await this.getResource(`/api/Team/Get?id=${id}`);
    };

    postTeam = async (data: ITeam) => {
        return await this.postResource('/api/Team/Add', data);
    }

    putTeam = async (data: ITeam) => {
        return await this.postResource(`/api/Team/Update`, data, "PUT");
    }

    deleteTeam = async (id: number | string) => {
        return await this.postResource('/api/Team/Delete?id=' + id, {}, 'DELETE');
    }


    getPositions = async () => {
        return await this.getResource('/api/Player/GetPositions');
    }

    getPlayers = async (page: number = 1, size: number = 6) => {
        return await this.getResource(`/api/Player/GetPlayers?Page=${page}&PageSize=${size}`);
    };

    getPlayersByTeamId = async (id: string = '') => {
        return await this.getResource(`/api/Player/GetPlayers?TeamIds=${id}`);
    };


    getPlayer = async (id: string = '') => {
        return await this.getResource(`/api/Player/Get?id=${id}`);
    };

    postPlayer = async (data: IPlayer) => {
        return await this.postResource('/api/Player/Add', data);
    }

    putPlayer = async (data: IPlayer) => {
        return await this.postResource(`/api/Player/Update`, data, "PUT");
    }

    deletePlayer = async (id: number | string) => {
        return await this.postResource('/api/Player/Delete?id=' + id, {}, 'DELETE');
    }


}

export const api = new ApiService();
