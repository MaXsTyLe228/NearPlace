import getButtonElement from '../UI/GetButton';
import showPlace from './Show'

export default function clickEventListener(): void {
    let el: HTMLElement = getButtonElement()
    el?.addEventListener("click", showPlace);
}