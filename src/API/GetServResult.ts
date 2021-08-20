import getPath from '../Business/GetFetchPath'

export default async function getResult(): Promise<any> {
    let path: string = getPath();
    let response: Response = await fetch(path);
    if (response.ok) { // если HTTP-статус в диапазоне 200-299 получаем тело ответа
        let json: any = await response.text();
        return json;
    }
    else {
        alert("Ошибка HTTP: " + response.status);
    }
}