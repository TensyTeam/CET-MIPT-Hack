import axios from 'axios';

function serverRequest(json = {}) {
    const link = 'https://mipt.kosyachniy.com/';
    return axios.post(link, json);
}

function handlerResult(res, handlerSuccess, handlerError) {
    if (res.error) {
        // console.log(res)
        handlerError(res);
    } else {
        // console.log(res)
        handlerSuccess(res);
    }
}

function api(method, params = {}, handlerSuccess = () => {}, handlerError = () => {}) {
    // console.log('input', json);
    serverRequest().then((res) => handlerResult(res.data, handlerSuccess, handlerError));
}

// API

export function getCSV(data) {
    return new Promise((resolve) => {
        const handlerSuccess = (res) => {
            console.log(res);
            resolve(res);
        };

        const handlerError = (res) => {
            console.log(res);
        };

        api('getCSV', data, handlerSuccess, handlerError);
    });
}
