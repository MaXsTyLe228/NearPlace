import searchPlace from './SearchPlace'
import getButtonElement from '../UI/GetButton'

export default function clickEventListener() {
    let el: HTMLElement = getButtonElement()
    el?.addEventListener("click", async () => { alert(`${await searchPlace()}`) });
}