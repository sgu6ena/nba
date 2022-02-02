import {store} from '../App'
import errors  from "./apiErrors"

export default class ApiService {
 
  _apiBaseUrl = `http://dev.trainee.dex-it.ru/`;

  headers: any=() => ({
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
      if ( errors[res.status]) {
        throw new Error(errors[res.status]);
      } else
        throw new Error(
          `Could not fetch resource: ${url} - status: ${res.status}`
        );
    }

    return await res.json();
  };

  postResource = async (url: string, data: any = {}) => {
    const res = await fetch(`${this._apiBaseUrl}${url}`, {
      headers: this.headers(),
      method: "POST",
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      if ( errors[res.status]) {
        throw new Error(errors[res.status]);
      } else
        throw new Error(
          `Could not fetch resource: ${url} - status: ${res.status}`
        );
    }

    return await res.json();
  };

  getPing = async () => {
    return await this.getResource(`api/echo/ping`);
  };
  getVersion = async () => {
    return await this.getResource(`api/echo/version`);
  };

  postLogin = async (login: string, pass: string) => {
    return await this.postResource(`api/Auth/SignIn`, {
      login: login,
      password: pass,
    });
  };

  postRegister = async (login: string, pass: string, userName: string) => {
    return await this.postResource(`api/Auth/SignUp`, {
      userName: userName,
      login: login,
      password: pass,
    });
  };

  getTeams = async () => {
    return await this.getResource("api/Team/GetTeams");
  };
  getPlayers = async () => {
    return await this.getResource("api/Player/GetPlayers");
  };
}
