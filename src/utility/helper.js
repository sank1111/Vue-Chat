export const getCookie = (name) => {
    const cookieName = name + "=";
    const decodedCookies = decodeURIComponent(document.cookie);
    const cookiesArray = decodedCookies.split(';');

    for (let i = 0; i < cookiesArray.length; i++) {
        let cookie = cookiesArray[i];

        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }

        if (cookie.indexOf(cookieName) == 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return null;
}