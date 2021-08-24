import { coordinatsPath, createConstParamPath } from '../API/MethodsAPI';
import * as parameters from '../API/constApi';
import valideteCoordinats from './Validation';

export default function getPath(x: number, y: number): string {
    let arrCoordinats = valideteCoordinats(x, y)
    if (arrCoordinats === true) {
        let path1: string = createConstParamPath(parameters);
        let path2: string = coordinatsPath(x, y, 1000);
        let wholePath = path1 + path2;
        return wholePath;
    }
    else alert('Некорректные данные');
}