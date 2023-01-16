let clients = require('../../data/clients.json');

export const clientsRepo = {
    getAll: () => clients,
    find: x => clients.find(x),
    create,
    update,
    delete: _delete
};


function create(client) {
    // generate new client id
    client.id = clients.length ? Math.max(...clients.map(x => x.id)) + 1 : 1;

    // set date created and updated
    client.dateCreated = new Date().toISOString();
    client.dateUpdated = new Date().toISOString();

    // add and save client
    clients.push(client);
    saveData();
}

function update(id, params) {
    const client = clients.find(x => x.id.toString() === id.toString());

    // set date updated
    client.dateUpdated = new Date().toISOString();

    // update and save
    Object.assign(client, params);
    saveData();
}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
function _delete(id) {
    // filter out deleted client and save
    clients = clients.filter(x => x.id.toString() !== id.toString());
    saveData();
    
}

// private helper functions

function saveData() {
    fs.writeFileSync('data/clients.json', JSON.stringify(clients, null, 4));
}