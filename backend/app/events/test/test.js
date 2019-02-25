const rand = require("random");
let mongoose = require("mongoose");
// set mongoose model as empty object to enable recompiling it
mongoose.models = {};

const chai = require("chai");
const { assert } = require("chai");
const chaiHttp = require("chai-http");
const app = require("./../../../app");
chai.use(chaiHttp);

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
        chai
          .expect(res.body)
          .to.include.keys(
            "awayName",
            "createdAt",
            "group",
            "homeName",
            "id",
            "name",
            "objectId",
            "sport",
            "country",
            "state"
          );
        done();
      });
  });
});

describe("DELETE /events/:id", () => {
  it("Should delete an event", done => {
    let id = 000000000;

    let newEvent = {
      awayName: "Test awayName",
      createdAt: new Date(),
      group: "Test group",
      homeName: "Test homeName",
      id: 000000000,
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
          .delete(`/events/${000000000}`)
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
        chai
          .expect(res.body[0])
          .to.include.keys(
            "awayName",
            "createdAt",
            "group",
            "homeName",
            "id",
            "name",
            "objectId",
            "sport",
            "country",
            "state"
          );
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
        chai
          .expect(res.body[0])
          .to.include.keys(
            "awayName",
            "createdAt",
            "group",
            "homeName",
            "id",
            "name",
            "objectId",
            "sport",
            "country",
            "state"
          );
        done();
      });
  });
});
