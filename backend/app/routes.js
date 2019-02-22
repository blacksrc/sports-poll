const routes = require("express").Router();
const EventsRouter = require("./events/routes");

routes.use("/events", EventsRouter);

module.exports = routes;
