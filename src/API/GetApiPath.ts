import { pathApi, client_id, client_secret, version } from './constApi';

export default function getApi(x: string, y: string): string {
    return `${pathApi}client_id=${client_id}&client_secret=${client_secret}&v=${version}&ll=${x},${y}`;
}