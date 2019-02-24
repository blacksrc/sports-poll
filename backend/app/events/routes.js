const routes = require("express").Router();
const EventsControllers = require("./controller");

routes.post("/", EventsControllers.createEvent);
routes.get("/", EventsControllers.fetchEvents);
routes.get("/:id", EventsControllers.fetchEvent);
routes.delete("/:id", EventsControllers.deleteEvent);

module.exports = routes;
