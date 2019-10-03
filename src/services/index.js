export const urlUP = function (ip) {
    return ip+":8080/PHP/up.php";
}
export const urlDOWN = function (ip) {
    return ip+":8080/PHP/down.php";
}
export const urlPAUSE = function (ip) {
    return ip+":8080/PHP/pause.php";
}

export const conTrol = url => {
    return fetch(url).then( response => {
        
    }
    ).catch( err => alert(err))
}


