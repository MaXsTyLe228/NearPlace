import getResult from './GetServResult'

let parametrs: any = {
    client_id: 'QTQAIKYRZTQ5YLI5EZTH1DBGUKNBF2WJETDCAIC2QVV5HR4Y',
    client_secret: '1SDXFEFAKQYCW0EIK33OMO0NGQ50QDSVZU1ANGFTJT0GOSKX',
    v: 20180323,
    limit: 500,
    ll: null,
}

function getPathUrl(path: string): string {
    //return firstPathApi+`${path}?`;
    return `https://api.foursquare.com/v2/${path}?`;
}

function getQuerryUrl(obj: object): string {
    let path: string = '';
    for (let i in obj)
        path += `&${i}=${obj[i]}`;
    return path;
}

function getUrl(x, y): string {
    parametrs.ll = `${x},${y}`;
    return getPathUrl('venues/search') + getQuerryUrl(parametrs);
}

export default async function getNearestPlaces(x: number, y: number): Promise<JSON> {
    //1-создание пути по аргументам
    let ajax: string = getUrl(x, y);
    //2-запрос на сервер по пути
    //3-получение результата от сервера
    let response: string  = await getResult(ajax);
    //4-преобразование результата
    let responseJson: JSON = JSON.parse(response);
    //5-возврещение преобразованного результата
    return responseJson;
}