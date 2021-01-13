const BASE_URL = '/api/goals';

function create(goaldata) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(goaldata)
    })
    .then(res => {
        if (res.ok) return res.json();
        throw new Error('Something is wrong!');
    });
}

export default {
    create
};