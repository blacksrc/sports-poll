const mongoose = require("mongoose");
const Event = mongoose.model("Event");

// fetch all sports
exports.fetchSports = (req, res) => {
	Event.find({}).distinct("sport", (err, data) => {
		err ? res.send(err) : res.json(data);
	});
};
