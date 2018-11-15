import React, { Component } from "react";
import API from '../utils/API';
import moment from "moment";

class ResultsListItem extends Component {
	constructor(props) {
		super();		

		this.handleButtonClick = this.handleButtonClick.bind(this);
	}

	handleButtonClick() {
		const newArticle = this.props.article;
		API.saveArticle(newArticle).then(this.props.getArticles);
	}

	render() {
		return (
		<div>
			<div className="card">
				<div className="card-block">
					<h4>{this.props.article.headline.main}</h4>
					<p>Date Published: {moment(this.props.article.pub_date).format("MMM Do YYYY")}
						<span>
							<button
								id="save-button"
								type="button"
								className="btn btn-outline-primary float-right"
								onClick={this.handleButtonClick}
							>
								Save Article
							</button>
						</span>
					</p>
					<p>
						<a href={this.props.article.web_url} target="_blank">link here</a>
					</p>

				</div>
			</div>
		</div>
		);
	}
};

export default ResultsListItem;
