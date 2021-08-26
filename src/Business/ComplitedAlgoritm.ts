import searchPlace from './SearchPlace'
import getNearestPlaces from '../API/MethodsAPI'
//поиск
export default async function getPlaceName(parametrs) {
    //ответ сервера
    let result = await getNearestPlaces(parametrs);
    //поиск ближайшего места
    let placeName = searchPlace(result);
    return placeName;
}