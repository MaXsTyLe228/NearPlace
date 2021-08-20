function coordinatsPath(x: number, y: number, limit: number = 500): string {
    return `&ll=${x},${y}&limit=${limit}`
}
//
function concatApiPath(firstPathApi: string, pathApiPiece: string, limit?) {
    return firstPathApi + pathApiPiece
}

function createConstParamPath(parametersObject): string {
    let pathPiece: string = parametersObject.firstPathApi;
    pathPiece += 'client_id=' + parametersObject.client_id;
    pathPiece += '&client_secret=' + parametersObject.client_secret;
    pathPiece += '&v=' + parametersObject.version;
    //pathPiece+=`&ll=${x},${y}`;
    return pathPiece
}

export { coordinatsPath, concatApiPath, createConstParamPath }