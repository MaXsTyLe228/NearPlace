import getX from '../UI/GetX';
import getY from '../UI/GetY';
import getPlaceName from './ComplitedAlgoritm';
import valideteCoordinats from './Validation';
//отображение
export default async function showPlace(): Promise<void> {
    let x: number = getX();
    let y: number = getY();
    if (valideteCoordinats(x, y) === true) {
        let ll = `${x},${y}`
        let photosstr = localStorage.getItem(ll);
        if (!!photosstr) {
            alert(photosstr)
        }
        else {
            let parametrs = {
                ll: ll,
                limit: 500,
                radius: 250,
            }
            let result: string = await getPlaceName(parametrs);
            localStorage.setItem(ll, result);
            if (result !== undefined)
                alert(result);
        }
    }
    else {
        alert('Некорректные данные');
    }
}