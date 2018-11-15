import React, { Component } from "react";
import API from '../utils/API';
import moment from "moment";

class SavedListItem extends Component {
	constructor(props) {
		super();

		this.handleButtonClick = this.handleButtonClick.bind(this);
	}

	handleButtonClick() {
		const articleId = this.props.article._id;
		API.deleteArticle(articleId)
		.then(this.props.getArticles);
	}

	render() {
		return (
			<div className="card">
				<div className="card-block">
					<h4>{this.props.article.title}</h4>
					<p>Date Saved: {moment(this.props.article.date).format("MMM Do YYYY")}
						<span>
							<button
								id="remove-button"
								type="button"
								className="btn btn-outline-danger float-right"
								onClick={this.handleButtonClick}
							>
								Remove Article
							</button>
						</span>
					</p>
					<p>
						<a href={this.props.article.url} target="_blank">link here</a>
					</p>
					
				</div>
			</div>
		);
	}
};

export default SavedListItem;