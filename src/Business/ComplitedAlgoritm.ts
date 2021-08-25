import searchPlace from './SearchPlace'
import getNearestPlaces from '../API/MethodsAPI'
import valideteCoordinats from './Validation'
//поиск
export default async function getPlaceName(x, y) {
    if (valideteCoordinats(x, y) === true) {
        let result = await getNearestPlaces(x, y);
        let placeName = searchPlace(result);
        return placeName;
    }
    else console.log('Некорректные данные');
}