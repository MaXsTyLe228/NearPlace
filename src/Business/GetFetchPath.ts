import getX from '../UI/GetX';
import getY from '../UI/GetY';
import { coordinatsPath, createConstParamPath } from '../API/MethodsAPI';
import * as parameters from '../API/constApi';
import valideteCoordinats from './Validation';

export default function getPath(): string {
    let x: number = getX();
    let y: number = getY();
    let arrCoordinats = valideteCoordinats(x, y)
    if (arrCoordinats === true) {
        let path1: string = createConstParamPath(parameters);
        let path2: string = coordinatsPath(x, y, 1000);
        let wholePath = path1 + path2;
        return wholePath;
    }
    else alert('Некорректные данные');
}