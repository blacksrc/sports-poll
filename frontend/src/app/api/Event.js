import API from "./API";

class EventModel extends API {

	fetchRandomEvent(sport, callback) {
		this.request(`/events?random&sport=${sport}`, {}, data => {
			callback(data);
		});
	}

	voteEvent(id, result, callback) {
		this.request(
			`/events/${id}/vote`,
			{
				method: "post",
				data: { result }
			},
			data => {
				callback(data);
			}
		);
	}
}

export default EventModel;
