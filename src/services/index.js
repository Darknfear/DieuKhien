export const urlUP = function (ip) {
    return "http:"+ip+":8080/PHP/up.php";
}
export const urlDOWN = function (ip) {
    return "http:"+ip+":8080/PHP/down.php";
}
export const urlPAUSE = function (ip) {
    return "http:"+ip+":8080/PHP/off.php";
}
export const urlModeAuto = function (ip) {
    return "http:"+ip+":8080/PHP/auto.php";
}
export const urlIP = function (ip) {
    return "http:"+ip+":8080/";
}

export async function conTrol(url){
    try {
        let response = await fetch(url);
        let responseJSON = await response.json();
        return responseJSON.status;
    } catch (error) {
        console.log(error)
    }
};

export async function checkIP (url) {
    try {
        let response = await fetch(url);
        let responseJSON = await response.json();
        return responseJSON.status;
    } catch (error) {
        console.log("err : "+error)   
    }
}


