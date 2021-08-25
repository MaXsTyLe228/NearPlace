export default function valideteCoordinats(x: number, y: number): boolean {
    if ((y <= 180 && y >= -180) && (x <= 90 && x >= -90) && (x !== 0 || y !== 0)) {
        return true;
    } else { return false; }
}