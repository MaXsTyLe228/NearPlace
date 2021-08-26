function findPlace(venues, place = '') {
    let distance: number = venues[0].location.distance;
    let accdistance: number = venues[0].location.distance;
    let position: number;
    let distarr: object = new Object();
    for (let i in venues) {
        if (venues[i].location.distance < 250) {
            if (distance >= venues[i].location.distance) {
                distance = venues[i].location.distance;
                position = +i;
                distarr[position] = distance;//обьект из индексов/дистанции по спаданию
                if (accdistance > distance) {
                    accdistance = distance;
                    place = `Ближайшая точка: ${venues[i].name}\n` +
                        `Расстояние: ${venues[i].location.distance}\n`;
                    if (venues[i].categories[0] !== undefined) {//если присутстует категория
                        place += `Тип: ${venues[i].categories[0].name}\n`;
                    }
                }
                else if (accdistance = distance) {
                    place += `Ближайшая точка: ${venues[i].name}\n` +
                        `Расстояние: ${venues[i].location.distance}\n`;
                    if (venues[i].categories[0] !== undefined) {//если присутстует категория
                        place += `Тип: ${venues[i].categories[0].name}\n`;
                    }
                }
            }
        }
        else { }
    }
    return place
}

export default function searchPlace(responseJson): string {
    if (responseJson !== null) {
        let venues: any = responseJson.response.venues;
        //console.log(venues);//показать все места рядом
        let place: string = '';
        if (venues[0] === undefined) {
            place = 'Рядом мест нет(';
        }
        else {
            if (findPlace(venues) !== '') {
                return findPlace(venues)
            }
            else{
                return 'Рядом мест нет(';
            }
        }
        return place;//48.467417227731005, 35.05174486808708 -- coordinats for 2 places
    }
}