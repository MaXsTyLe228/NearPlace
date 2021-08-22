import getNearPlace from './SearchPlace'
import getButtonElement from '../UI/GetButton'

export default function clickEventListener() {
    let el: HTMLElement = getButtonElement()
    el?.addEventListener("click", async () => {
        let result: string = await getNearPlace();
        if (result !== undefined)
            alert(`${result}`)
    });
}