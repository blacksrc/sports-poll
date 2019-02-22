const routes = require("express").Router();
const EventsControllers = require("./controller");

routes.post("/", EventsControllers.createEvent);
routes.get("/", EventsControllers.eventsList);
routes.get("/:id", EventsControllers.event);
routes.delete("/:id", EventsControllers.deleteEvent);

module.exports = routes;
