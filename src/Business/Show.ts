import getX from '../UI/GetX';
import getY from '../UI/GetY';
import valideteCoordinats from './Validation';
import searchPlace from './SearchPlace'
import getNearestPlaces from '../API/MethodsAPI'
//отображение
export default async function showPlace(): Promise<void> {
    let x: number = getX();
    let y: number = getY();
    if (!!valideteCoordinats(x, y)) {
        let ll = `${x},${y}`
        let starageResult = localStorage.getItem(ll);
        if (!!starageResult) {
            alert(starageResult)
        }
        else {
            let parametrs = {
                ll: ll,
                limit: 500,
                radius: 250,
            }
            let result = await getNearestPlaces(parametrs);
            let placeName = searchPlace(result);
            localStorage.setItem(ll, placeName);
            if (placeName !== undefined)
                alert(placeName);
        }
    }
    else {
        alert('Некорректные данные');
    }
}