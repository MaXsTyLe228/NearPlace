export default async function getResult(path: string): Promise<string> {
    //let path: string = getPath();
    let response: Response = await fetch(path);
    if (response.ok) { // если HTTP-статус в диапазоне 200-299 получаем тело ответа
        let json: any = await response.text();
        return json;
    }
    else {
        console.log("Ошибка HTTP: " + response.status);
        return null;
    }
}