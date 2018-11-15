import React from "react";
import SavedListItem from "./saved_list_item";

const Saved = props => {
	if (!props.savedItems.length) {
		return null
	}
	console.log('props in Saved: ', props)
	const savedArticles = props.savedItems.map(article => {
		return <SavedListItem key={article._id} article={article} getArticles={props.getArticles} />;
	});
	return (
		<div>
			<div className="card">
				<div className="card-block">
					<h2>Saved Articles</h2>
					<div>{savedArticles}</div>
				</div>
			</div>

		</div>
	);
};

export default Saved;