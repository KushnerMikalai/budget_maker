import store from '../../store/store'

export default {
    get: option => {
        const state = store.getState();

        return fetch(option.url, {
            method: 'GET',
            headers: {
                'authorization': state.user.token,
            },
        })
        .then(response => response.json())
    }
}
