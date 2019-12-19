const db = require('../../data/db-config');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById
};

async function insert(resource) {
  return db('tester').insert(resource).returning('id'); //returning is the same as passing the second argument in .insert
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

function getAll() {
  return db('tester');
}

function findById(id) {
  return null;
}
