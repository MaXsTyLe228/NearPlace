import getResult from '../API/GetServResult'

export default async function searchPlace(): Promise<string> {
    let responseJson: any = JSON.parse(await getResult());
    let venues: any = responseJson.response.venues;
    console.log(responseJson);//
    let place: string;
    if (venues[0] === undefined) {
        place = 'Рядом мест нет(';
    }
    else {
        let distance: number = venues[0].location.distance;
        let position: number;
        for (let i in venues) {
            if (distance >= venues[i].location.distance) {
                distance = venues[i].location.distance;
                position = +i;
            }
        }
        place = `Ближайшая точка: ${venues[position].name}\n` +
            `Расстояние: ${venues[position].location.distance}\n`
        if (venues[position].categories[0] !== undefined) {
            place += `Тип: ${venues[position].categories[0].name}\n`;
        }
    }
    return place;
}