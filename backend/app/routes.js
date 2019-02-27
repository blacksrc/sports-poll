const routes = require("express").Router();
const EventsRouter = require("./events/routes");
const SportRouter = require("./sports/routes");

// event routes
routes.use("/events", EventsRouter);
routes.use("/sports", SportRouter);

// handling resource not found
routes.use(function (req, res) {
  res.status(404).send({ message: `Resource ${req.url} not found.` });
});

// handling internal server error
routes.use(function (res) {
  res.status(500).send({ message: "Internal server error." });
});

// export all routes out to load inside app
module.exports = routes;
