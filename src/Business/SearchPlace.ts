import getResult from '../API/GetServResult'

export default async function searchPlace(): Promise<string> {
    let responseJson: any = JSON.parse(await getResult());
    let venues: any = responseJson.response.venues;
    console.log(responseJson);
    let place: string = '';
    if (venues[0] === undefined) {
        place = 'Рядом мест нет(';
    }
    else {
        let distance: number = venues[0].location.distance;
        let position: number;
        let distarr = new Object();
        for (let i in venues) {
            if (distance >= venues[i].location.distance) {
                distance = venues[i].location.distance;
                position = +i;
                distarr[position] = distance;
            }
        }
        console.log(distarr);
        for (let i in distarr) {
            console.log(venues[i])
            if (venues[i].location.distance <= distance) {
                console.log(distance)
                place += `Ближайшая точка: ${venues[i].name}\n` +
                    `Расстояние: ${venues[i].location.distance}\n`;
                if (venues[i].categories[0] !== undefined) {
                    place += `Тип: ${venues[i].categories[0].name}\n`;
                }
            }
        }

    }
    return place;//44.953435, 45.039815 -- coordinats for 2 places
}