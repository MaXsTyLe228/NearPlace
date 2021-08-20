import getPath from '../Business/GetFetchPath'

export default async function getResult(): Promise<any> {
    let path: string = getPath();
    let response: Response = await fetch(path);
    if (response.ok) { // если HTTP-статус в диапазоне 200-299
        // получаем тело ответа
        let json: any = await response.json();
        return json;
    }
    else {
        alert("Ошибка HTTP: " + response.status);
    }
}


/*function gentratePath(pathApi, createdPath): string {
    return path
}

function d() {
    let path: string = gentratePath(pathApi, createdPath);
    
}*/