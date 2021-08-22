function coordinatsPath(x: number, y: number, limit: number = 500): string {
    return `&ll=${x},${y}&limit=${limit}`
}

function createConstParamPath(parameters: any): string {
    let pathPiece: string = parameters.firstPathApi;
    pathPiece += 'client_id=' + parameters.client_id;
    pathPiece += '&client_secret=' + parameters.client_secret;
    pathPiece += '&v=' + parameters.version;
    //pathPiece+=`&ll=${x},${y}`;
    return pathPiece
}

export { coordinatsPath, createConstParamPath }