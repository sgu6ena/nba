

export default class ApiService {
    _apiBaseUrl = `//dev.trainee.dex-it.ru`;

    getResource = async (url:string) =>{
        const res = await  fetch(`${this._apiBaseUrl}${url}`);

        if (!res.ok) {
            throw new Error (`Could not fetch resource: ${url} - status: ${res.status}`);
        }

        return await res.json();
    }

    getPing = async () => {
        return await this.getResource(`/api/echo/ping`);
    }
    getVersion = async () => {
        return await this.getResource(`/api/echo/version`);
    }

    getCar = async (id: string | undefined | number) => {
        return await this.getResource(`/cars/${id}`);
    }

}