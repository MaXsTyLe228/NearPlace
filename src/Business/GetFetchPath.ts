import getX from '../UI/GetX';
import getY from '../UI/GetY';
import getApi from './GetApiPath'

export default function getPath(): string {
    let x: string = getX();
    let y: string = getY();
    let path: string = getApi(x, y);
    if (+x !== 0 && +y !== 0)
        return path;
    else {
        alert('Рядом мест нет');
        return "";
    }
}