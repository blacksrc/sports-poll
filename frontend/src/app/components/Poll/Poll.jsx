import React, { Component } from "react";
import Header from "./../../layouts/Header";
import Event from "./../Event";
import Sport from "./../../api/Sport";
import "./asset/Poll.scss";

class Poll extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		new Sport().fetchSports(sports => {
			this.props.setSports({ sports: sports.data });
		});
	}

	render() {
		return (
			<div className="poll-container">
				<section className="poll-box">
					<Header />
					<Event />
				</section>
			</div>
		);
	}
}

export default Poll;
