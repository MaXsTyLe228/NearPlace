import getX from '../UI/GetX';
import getY from '../UI/GetY';
import { coordinatsPath, concatApiPath, createConstParamPath } from '../API/MethodsAPI';
import * as parameters from '../API/constApi';
import valideteCoordinats from './Validation';

export default function getPath(): string {
    let x: number = getX();
    let y: number = getY();
    let arrCoordinats = valideteCoordinats(x, y)
    if (arrCoordinats !== null) {
        let path1: string = createConstParamPath(parameters);
        let path2: string = coordinatsPath(x, y);
        let wholePath = concatApiPath(path1, path2);
        return wholePath;
    }
    else alert('Некорректные данные');
}

/*export default function getPath(): string {
    let x: number = getX();
    let y: number = getY();
    let path: string = coordinatsPath(x, y);
    if (+x !== 0 && +y !== 0)
        return path;
    else {
        alert('Рядом мест нет');
        return "";
    }
}*/