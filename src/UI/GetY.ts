export default function getY(): number {
    let y: number = +document.getElementsByTagName("input")[1].value;
    return y;
}