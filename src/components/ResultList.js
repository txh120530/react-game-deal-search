import React from 'react';
import Result from './Result';
import './ResultList.css'


const ResultList = (props) =>{
	console.log(props.deals);

	const deals = props.deals.map((deal, index) => {
			return <Result key={index} deal={deal} />;
	});	

	return <div className="result-list">{deals}</div>;
  
}


export default ResultList;