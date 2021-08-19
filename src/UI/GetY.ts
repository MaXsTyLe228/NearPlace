export default function getY(): string {
    let y: string = document.getElementsByTagName("input")[1].value;
    if (+y <= 180 && +y >= -180)
        return y;
    else alert('Введите правильную широту')
}