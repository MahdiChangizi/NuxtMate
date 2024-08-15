/*
    Written by: "Mahdi Changizi"
    Feel free to reach out to me:
    My Github: @https://github.com/Mahdichangizi
    My Telegram: @https://t.me/Mahdi_changizi
*/

import Auth from "./savedData/auth";

export const BASE_URL = 'http://localhost:8000';
export const APP_URL = 'http://localhost:5173';
export const API_BASE_URL = BASE_URL + '/api';

export const API_CONFIG = {
    headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json; charset=UTF-8',
    },
};

export const serverAsset = (path: string) => {
    if (path?.startsWith('http'))
        return path;
    if (path?.startsWith('/')) path = path.substr(1);
    return `${BASE_URL}/${path}`;
}

//logout
export const logout = () => {
    Auth.del();
    window.location.reload();
}

export const getAbsAddress = (url: string) => {
    return APP_URL + (url.startsWith('/') ? url : '/' + url);
}