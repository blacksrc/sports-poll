const routes = require("express").Router();
const SportController = require("./controller");

routes.get("/", SportController.fetchSports);

module.exports = routes;
