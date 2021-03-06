const rand = require("random");
const mongoose = require("mongoose");
const Event = mongoose.model("Event");

// fetch all events
exports.fetchEvents = async (req, res) => {
	// calculate all documents count
	const documentCount = await Event.countDocuments();

	// destruct random and limit out of query and id out of params
	const { id } = req.params;
	let { random, limit, sport } = req.query;

	// by default search filter is an empty object to return all documents
	let searchCondition = { result: ""};

	// if :id exists then it will be added to searchCondition object
	searchCondition = {
		...(id && { id: req.params.id })
	};

	// Creating Query object with searchCondition
	let Query = Event.find(searchCondition).where({ result: null }).where({ sport: sport }).where({ state: {$ne: "FINISHED"}});

	// Check limit and random queries to show documents limited or randomly depend on which of these queries is set
	/*if (limit !== undefined && random === undefined) {
		limit = Number(limit);
		Query.limit(limit);
	} else if (limit === undefined && random !== undefined) {
		Query.skip(rand.int(0, documentCount - 1));
		Query.limit(1);
	} else if (limit !== undefined && random !== undefined) {
		Query.skip(rand.int(0, documentCount));
		limit = Number(limit);
		Query.limit(limit);
	}*/

	// executing the query to fetch resault from mongodb
	Query.exec((err, data) => {
		err ? res.send(err) : res.json(data);
	});
};

// create new event
exports.createEvent = (req, res) => {
	var newEvent = new Event(req.body);
	newEvent.save((err, data) => {
		err ? res.send(err) : res.json(data);
	});
};

// delete event by id
exports.deleteEvent = (req, res) => {
	Event.deleteMany({ id: req.params.id }, (err, data) => {
		err ? res.send(err) : res.json(data);
	});
};

// delete event by id
exports.fetchSports = (req, res) => {
	Event.find({}).distinct("sport", (err, data) => {
		err ? res.send(err) : res.json(data);
	});
};

// vote an event
exports.voteEvent = (req, res) => {
	Event.findOneAndUpdate(
		{ id: req.params.id },
		{ result: req.body.result },
		(err, data) => {
			err ? res.send(err) : res.json(data);
		}
	);
};
