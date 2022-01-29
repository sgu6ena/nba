
import {store} from '../App'


interface IHeaders {
  "Content-Type": string;
  Accept: string;
  Authorization?: string;
  cors?: string;
}

type IMethod = "GET" | "POST" | "PUT" | "DELETE";

const mapStateToProps = ( state:any ) => state.user.token;
export default class ApiService {
 
  _apiBaseUrl = `http://dev.trainee.dex-it.ru/`;

  headers: any=() => ({
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${GetToken()}`,
    cors: "no-cors",
  });

  getResource = async (url: string) => {
    const res = await fetch(`${this._apiBaseUrl}${url}`, {
      headers: this.headers(),
      method: "GET",
    });


    if (!res.ok) {
      return res.status;
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
      if (res.status === 401) {
        throw new Error(`Login or password are incorrect`);
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

function GetToken (){
  const token = store.getState().userReducer.token;
console.log(token);

  return token;
}