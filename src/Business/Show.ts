import getX from '../UI/GetX';
import getY from '../UI/GetY';
import getPlaceName from './ComplitedAlgoritm';
//отображение
export default async function showPlace(): Promise<void> {
    let x: number = getX();
    let y: number = getY();
    let result: string = await getPlaceName(x, y);
    if (result !== undefined)
        alert(result);
}