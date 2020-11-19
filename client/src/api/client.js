import { setCookie, deleteCookie } from '../utils/helpers/cookie'

let currentAuthToken = null

export function setTokenClient(token) {
    currentAuthToken = token;
    setCookie('session_id', token, {secure: true})
}

export async function client(endpoint, { body, ...customConfig } = {}) {
    const headers = { 'Content-Type': 'application/json' };

    const config = {
        method: body ? 'POST' : 'GET',
        ...customConfig,
        headers: {
            ...headers,
            ...customConfig.headers,
        },
    };

    if (currentAuthToken) {
        config.headers.Authorization = `Bearer ${currentAuthToken}`;
    }

    if (body) {
        config.body = JSON.stringify(body);
    }

    const endFetch = async (response) => {
        data = await response.json();
        if (!response.ok) {
            data.errors = Array.isArray(data.errors.msg) ? data.errors.msg : [data.errors];
        }
        return data;
    };

    let data;
    try {
        const response = await fetch(endpoint, config);
        if (response.status === 401 && currentAuthToken) {
            const resToken = await fetch(`${process.env.REACT_APP_API_HOST}/token`, config);
            if (resToken.status === 401) {
                deleteCookie('session_id');
                return { data: 'Unauthorized' };
            }
            setTokenClient(resToken.token);
            const responseNext = await fetch(endpoint, config);
            return endFetch(responseNext);
        } else {
            return endFetch(response);
        }
    } catch (err) {
        return {errors: {name: 'Failed to fetch'}}
        // TODO error handler add
        // return Promise.reject({
        //     name: err.message,
        //     data,
        // });
    }
}

client.get = function (endpoint, customConfig = {}) {
    return client(endpoint, { ...customConfig, method: 'GET' });
};

client.post = function (endpoint, body, customConfig = {}) {
    return client(endpoint, { ...customConfig, body });
};
