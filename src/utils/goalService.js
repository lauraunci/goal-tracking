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

function getAll() {
    return fetch(BASE_URL, {
        method: 'GET',
        headers: {'content-type': 'application/json'},
    })
    .then(res => res.json());
}

function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
        headers: {'content-type': 'application/json'},
    })
    .then(res => res.json());
}

const data = {
    create,
    getAll,
    deleteOne
};

export default data;