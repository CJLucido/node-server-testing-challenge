const knex = require('knex');

const knexfile = require('../knexfile.js');

const environment = 'testing';

module.exports = knex(knexfile['testing']);


//process.env.DB_ENV || 