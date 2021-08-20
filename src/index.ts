import clickEventListener from './Business/ClickEvent';

clickEventListener();


function valideteCoordinats(x: number, y: number): number[] {
    if ((y <= 180 && y >= -180) && (x <= 90 && x >= -90) && (x !== 0 || y !== 0)) {
        return [x, y];
    } else {
        alert('Некорректные данные');
        return null;
    }
}
console.log(valideteCoordinats(90, 180.00000))
/*import createConstParamPath from './API/ForesquareAPI'
import parametersObject from './API/constApi';




let path1 = createConstParamPath(parametersObject);
let path2 = coordinatsPath(45, 45)


let wholePath = concatApiPath(path1, path2)

console.log(wholePath);*/