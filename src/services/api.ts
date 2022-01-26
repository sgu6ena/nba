interface IHeaders {
  "Content-Type": string;
  Accept: string;
}

type IMethod = "GET" | "POST" | "PUT" | "DELETE";

export default class ApiService {
  _apiBaseUrl = `//dev.trainee.dex-it.ru/`;

  headers: any = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  getResource = async (url: string) => {
    const res = await fetch(`${this._apiBaseUrl}${url}`, {
      headers: this.headers,
      method: "GET",
    });

    if (!res.ok) {
      throw new Error(
        `Could not fetch resource: ${url} - status: ${res.status}`
      );
    }

    return await res.json();
  };

  postResource = async (url: string, data: any = {}) => {
    const res = await fetch(`${this._apiBaseUrl}${url}`, {
      headers: this.headers,
      method: "POST",
      body: JSON.stringify(data),
    });

    if (!res.ok) {
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

  postRegister = async (login: string, pass: string) => {
    return await this.postResource(`api/Auth/SignIn`, {
      login: login,
      password: pass,
    });
  };

}
