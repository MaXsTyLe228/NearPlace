function cyclePlaces(venues, place = '') {
    let distance: number = venues[0].location.distance;
    let position: number;
    let distarr: object = new Object();
    for (let i in venues) {
        /*if (venues[i].location.distance < 150) {//для просмотра мест рядом
            console.log(venues[i].name, venues[i].location.distance)
        }*/
        if (distance >= venues[i].location.distance) {
            distance = venues[i].location.distance;
            position = +i;
            distarr[position] = distance;//обьект из индексов/дистанции по спаданию
        }
    }
    //console.log(distarr);
    for (let i in distarr) {
        //console.log(venues[i])
        if (venues[i].location.distance <= distance) {
            //console.log(distance)
            place += `Ближайшая точка: ${venues[i].name}\n` +
                `Расстояние: ${venues[i].location.distance}\n`;
            if (venues[i].categories[0] !== undefined) {//если присутстует категория
                place += `Тип: ${venues[i].categories[0].name}\n`;
            }
        }
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
        else { place = cyclePlaces(venues); }
        return place;//48.467417227731005, 35.05174486808708 -- coordinats for 2 places
    }
}