let fs = require('fs')
const pg = require('knex')({
  client: 'pg',
  version: '9.6',
  searchPath: ['knex', 'public'],
  connection: process.env.PG_CONNECTION_STRING
    ? process.env.PG_CONNECTION_STRING
    : 'postgres://example:example@localhost:5432/test',


  pool: {
    min: 2,
    max: 50,
    "idleTimeoutMillis": 30000,
    "createTimeoutMillis": 30000,
    "acquireTimeoutMillis": 30000,
    propagateCreateError: true
  }
});


module.exports = pg