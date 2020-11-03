const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

// Option 1: Passing a connection URI
const sequelize = new Sequelize("mysql::memory:"); // Example for mysql
const sequelize = new Sequelize("postgres://user:pass@example.com:5432/dbname"); // Example for postgres

// Option 2: Passing parameters separately (mysql)
const sequelize = new Sequelize({
  dialect: "mysql",
  storage: "path/to/database.mysql",
});

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "mysql" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
});

module.exports = connection;
