//const DB_CONFIG = require('./app/config/db');
require('custom-env').env('development');

const {
  NODE_DB_HOST,
  NODE_DB_PORT,
  NODE_DB_NAME,
} = process.env;

const config = {
  mongodb: {
    // TODO Change (or review) the url to your MongoDB:
    url: `mongodb://${NODE_DB_HOST}:${NODE_DB_PORT}`,

    // TODO Change this to your database name:
    databaseName: NODE_DB_NAME,

    options: {
      useNewUrlParser: true // removes a deprecation warning when connecting
      //   connectTimeoutMS: 3600000, // increase connection timeout to 1 hour
      //   socketTimeoutMS: 3600000, // increase socket timeout to 1 hour
    }
  },

  // The migrations dir, can be an relative or absolute path. Only edit this when really necessary.
  migrationsDir: "migrations",

  // The mongodb collection where the applied changes are stored. Only edit this when really necessary.
  changelogCollectionName: "changelog"
};

//Return the config as a promise
module.exports = config;
