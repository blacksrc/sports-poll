const routes = require("express").Router();
const EventsController = require("./controller");

routes.post("/", EventsController.createEvent);
routes.get("/", EventsController.fetchEvents);
routes.get("/:id", EventsController.fetchEvents);
routes.delete("/:id", EventsController.deleteEvent);

module.exports = routes;
