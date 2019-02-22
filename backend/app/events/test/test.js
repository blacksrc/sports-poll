const mongoose = require("mongoose");
mongoose.models = {};

const chai = require("chai");
const { assert } = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const app = require("./../../../app");

describe("POST /events", () => {
  it("Should create a new event", done => {
    let newEvent = {
      awayName: "Test awayName",
      createdAt: new Date(),
      group: "Test group",
      homeName: "Test homeName",
      id: 123456789,
      name: "Test Name",
      objectId: "Test objectId",
      sport: "Test sport",
      country: "Test country",
      state: "NOT_STARTED"
    };

    chai
      .request(app)
      .post("/events")
      .send(newEvent)
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.isObject(res);
        assert.isObject(res.body);
        assert.property(res.body, "awayName");
        assert.property(res.body, "awayName");
        assert.property(res.body, "createdAt");
        assert.property(res.body, "group");
        assert.property(res.body, "homeName");
        assert.property(res.body, "id");
        assert.property(res.body, "name");
        assert.property(res.body, "objectId");
        assert.property(res.body, "sport");
        assert.property(res.body, "country");
        assert.property(res.body, "state");
        done();
      });
  });
});

describe("DELETE /events/:id", () => {
  it("Should delete an event", done => {
    let newEvent = {
      awayName: "Test awayName",
      createdAt: new Date(),
      group: "Test group",
      homeName: "Test homeName",
      id: 123456789123456789,
      name: "Test Name",
      objectId: "Test objectId",
      sport: "Test sport",
      country: "Test country",
      state: "NOT_STARTED"
    };

    chai
      .request(app)
      .post("/events")
      .send(newEvent)
      .end((err, res) => {
        chai
          .request(app)
          .delete("/events/123456789")
          .end((err, res) => {
            assert.equal(res.status, 200);
            assert.property(res.body, "ok");
            assert.property(res.body, "deletedCount");
            done();
          });
      });
  });
});

describe("GET /events", () => {
  it("Should return array of events", done => {
    chai
      .request(app)
      .get("/events")
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.isObject(res);
        assert.isArray(res.body);
        assert.property(res.body[0], "awayName");
        assert.property(res.body[0], "awayName");
        assert.property(res.body[0], "createdAt");
        assert.property(res.body[0], "group");
        assert.property(res.body[0], "homeName");
        assert.property(res.body[0], "id");
        assert.property(res.body[0], "name");
        assert.property(res.body[0], "objectId");
        assert.property(res.body[0], "sport");
        assert.property(res.body[0], "country");
        assert.property(res.body[0], "state");
        done();
      });
  });
});

describe("GET /events/:id", () => {
  it("Should return an event", done => {
    chai
      .request(app)
      .get("/events/1002916450")
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.isObject(res);
        assert.isArray(res.body);
        assert.lengthOf(res.body, 1);
        assert.property(res.body[0], "awayName");
        assert.property(res.body[0], "awayName");
        assert.property(res.body[0], "createdAt");
        assert.property(res.body[0], "group");
        assert.property(res.body[0], "homeName");
        assert.property(res.body[0], "id");
        assert.property(res.body[0], "name");
        assert.property(res.body[0], "objectId");
        assert.property(res.body[0], "sport");
        assert.property(res.body[0], "country");
        assert.property(res.body[0], "state");
        done();
      });
  });
});
