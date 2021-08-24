import searchPlace from './SearchPlace'
import getResult from '../API/GetServResult'
import getPath from './GetFetchPath'
//поиск
export default function getPlaceName(x, y) {
    let path = getPath(x, y)
    let result = getResult(path);
    let placeName = searchPlace(result)
    return placeName;
}