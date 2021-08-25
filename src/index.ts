import clickEventListener from './Business/ClickEvent';

clickEventListener();

/*function getPathUrl(path: string) {
    //return firstPathApi+`${path}?`;
    return `https://api.foursquare.com/v2/${path}?`;
}

let object = {
    client_id: 'QTQAIKYRZTQ5YLI5EZTH1DBGUKNBF2WJETDCAIC2QVV5HR4Y',
    client_secret: '1SDXFEFAKQYCW0EIK33OMO0NGQ50QDSVZU1ANGFTJT0GOSKX',
    v: 20180323,
    limit: 500,
    ll: '48.51222542448951,35.00677408748278',
}

function getQuerryUrl(obj: object): string {
    let path: string = '';
    for (let i in obj)
        path += `&${i}=${obj[i]}`;
    return path
}
function getUrl(x, y) {
    object.ll = `${x},${y}`
    return getPathUrl('venues/search') + getQuerryUrl(object)
}

console.log(getUrl(48.530303493109855, 35.029433389658934));*/