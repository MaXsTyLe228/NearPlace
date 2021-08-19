export default function getX(): string {
    let x: string = document.getElementsByTagName("input")[0].value;
    if (+x <= 90 && +x >= -90)
        return x;
    else alert('Введите правильную долготу')
}