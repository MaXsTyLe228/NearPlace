export default function getX(): number {
    let x: number = +document.getElementsByTagName("input")[0].value;
    return x;
}