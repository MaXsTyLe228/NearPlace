import getResult from '../API/GetServResult'

export default async function searchPlace(): Promise<string> {
    let res: any = await getResult();
    let obj: any = res.response.venues;
    if (obj[0] === undefined) {
        return 'Рядом мест нет(';
    }
    else {
        let distance: number = obj[0].location.distance;
        let j: number = 0;
        //let arr: any;
        for (let i in obj) {
            if (distance >= obj[i].location.distance) {
                //arr.push([obj[i].location.distance])
                distance = obj[i].location.distance;
                j = +i;
            }
        }
        //console.log(arr);
        /*for (let i in obj) {
            if(obj[i].location.distance===distance)
            console.log(obj[i]);
        }*/
        let str: string = `Ближайшая точка: ${obj[j].name}\nРасстояние: ${obj[j].location.distance}\nТип: ${obj[j].categories[0].name}`;
        return str;
    }
}