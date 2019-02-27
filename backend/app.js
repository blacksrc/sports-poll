const mongoose = require("mongoose");
const app = require("express")();
const bodyParser = require("body-parser");

// load environment variables depend on NODE_ENV variable
if (process.env.NODE_ENV == "development") {
  require("custom-env").env("development");
} else if (process.env.NODE_ENV == "test") {
  require("custom-env").env("test");
} else if (process.env.NODE_ENV == "production") {
  require("custom-env").env("production");
}

const { NODE_DB_HOST, NODE_DB_PORT, NODE_DB_NAME, NODE_PORT } = process.env;

// Requiring model to register schema
require("./app/events/model");

// requiring all routes
const routes = require("./app/routes");

// create new connection to mongodb
mongoose.connect(`mongodb://${NODE_DB_HOST}:${NODE_DB_PORT}/${NODE_DB_NAME}`, {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set headers for all responses
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// load all routes
app.use("/", routes);

// To handle test invironment
if (!module.parent) {
  app.listen(NODE_PORT, () =>
    console.log(`Sport Poll is listening on port ${NODE_PORT}`)
  );
}

// export whole application to load it inside tests
module.exports = app;
