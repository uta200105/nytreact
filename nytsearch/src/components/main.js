import React from 'react';
import SearchResultContainer from './SearchResultContainer';

const Main = (props) => {
	console.log("process ", process.env)
  
    return (
      <div className="Main">
        <SearchResultContainer />
      </div>
    );
}

export default Main;