import searchPlace from './SearchPlace'
import getNearestPlaces from '../API/MethodsAPI'
import valideteCoordinats from './Validation'
//поиск
export default async function getPlaceName(x, y) {
    //валидация входных аргументов
    if (valideteCoordinats(x, y) === true) {
        //ответ сервера
        let result = await getNearestPlaces(x, y);
        //поиск ближайшего места
        let placeName = searchPlace(result);
        return placeName;
    }
    else {
        alert('Некорректные данные');
        //console.log('Некорректные данные');
    }
}