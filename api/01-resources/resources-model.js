const db = require('../../data/db-config');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById
};

async function insert(resource) {
  return db('tester')
  .insert(resource, 'id')
 .then(ids => {
   const id = ids[0]

   return findById(id)
 }); //returning is the same as passing the second argument in .insert
}

async function update(changes, id) {
  return db('tester')
  .where({id})
  .update(changes)
  .then(count => {
      

      return findById(id) 
      //`${count} records updated`
  });
}

function remove(id) {
  return db('tester')
    .where({id})
    .del();
}

function getAll() {
  return db('tester');
}

function findById(id) {
  return db('tester')
  .select('*')
  .where({id})//returns ARRAY
  .first()//returns just the one!;
}
