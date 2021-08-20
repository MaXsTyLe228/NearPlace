import getResult from '../API/GetServResult'

export default async function searchPlace(): Promise<string> {
    let response: any = JSON.parse(await getResult());
    let venues: any = response.response.venues;
    console.log(response);
    if (venues[0] === undefined) {
        return 'Рядом мест нет(';
    }
    else {
        let distance: number = venues[0].location.distance;
        let j: number = 0;
        //let arr: any;
        for (let i in venues) {
            if (distance >= venues[i].location.distance) {
                //arr.push([obj[i].location.distance])
                distance = venues[i].location.distance;
                j = +i;
            }
        }
        //console.log(arr);
        /*for (let i in obj) {
            if(obj[i].location.distance===distance)
            console.log(obj[i]);
        }*/
        let str: string = `Ближайшая точка: ${venues[j].name}\nРасстояние: ${venues[j].location.distance}\nТип: ${venues[j].categories[0].name}`;
        return str;
    }
}