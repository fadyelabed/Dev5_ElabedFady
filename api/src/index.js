const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const md5 = require('md5');
const jwtToken = require('jsontokens');
const Helpers = require('./utils/helpers.js');



const DatabaseHelper = require('./helper/DatabaseHelper');
const InitialiseDBHelpers = require('./helper/InitialiseDBHelpers')
const UUIDHelper = require('./helper/UuidHelpers');
/*
const AuthHelper = require('./helper/AuthHelper');
InitialiseDBHelpers.initialiseTables(DatabaseHelper);
*/

const pg = require('knex')({
  client: 'pg',
  version: '9.6',
  searchPath: ['knex', 'public'],
  connection: process.env.PG_CONNECTION_STRING ? process.env.PG_CONNECTION_STRING : 'postgres://example:example@localhost:5432/test'
});

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get('/', (req, res) => {
  res.send('Hello World -- deployed again!')
})
app.get('/gerechten', async (req, res) => {
  const result = await pg
    .select(['uuid', 'gerechten', 'ingredienten','keuken' , 'created_at','updated_at'])
    .from('gerechten');
  res.json({
    res: result,
  });
});

app.get('/join', async (req, res) => {
  await DatabaseHelper
    .table('items')
    .join('lists', DatabaseHelper.raw('item.list_id::varchar'), DatabaseHelper.raw('lists.uuid::varchar'))
    .select('lists.*', 'items.*')
    .then((data) => {
      res.send(data)
    })

})

app.post('/gerechten-add', async (req, res) => {
  const uuid = Helpers.generateUUID();
  const result = await pg

    .insert({ uuid, gerechten: 'Pizza', ingredienten: 'deeg, tomaat, basilicum, mozzarella', keuken: "Italiaans" },)
    .table('gerechten')
    .returning('*')
    .then((res) => {
      return res;
    });
  console.log('add 1 gerecht entry');
  console.log(result);
  res.send(result);
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(process.env.PORT || 3001, () => console.log(`Listening on port ${process.env.PORT || 3001}`));
}
async function initialiseTables() {
  await pg.schema.hasTable('gerechten').then(async (exists) => {
    if (!exists) {
      await pg.schema
        .createTable('gerechten', (table) => {
          table.increments();
          table.uuid('uuid');
          table.string('gerechten');
          table.string('ingredienten');
          table.string('keuken');
          table.timestamps(true, true);
        })
        .then(async () => {
          console.log('created table gerechten');

        });

    }
  });
  await pg.schema.hasTable('keukens').then(async (exists) => {
    if (!exists) {
      await pg.schema
        .createTable('keukens', (table) => {
          table.increments().primary();
          table.uuid('uuid');
          table.string('italiaans');
          table.string('amerikaans');
          table.string('indisch');
          table.string('japans');
          table.timestamps(true, true);
        })
        .then(async () => {
          console.log('created table keukens');

        });

    }
  });
}

initialiseTables()

module.exports = app