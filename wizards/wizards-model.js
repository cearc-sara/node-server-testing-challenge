const db = require("../database/dbConfig")

module.exports = {
    getAll,
    findById,
    insert,
    // update, 
    // remove
}

function getAll() {
    return db("wizards")
}

function findById(id){
    return db("wizards")
    .where({id})
    .first()
}

function insert(wizard) {
    return db("wizards")
        .insert(wizard, "id")
        .then(ids => {
            const id = ids[0]
            return findById(id)
        })
}
