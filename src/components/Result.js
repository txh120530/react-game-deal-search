import React from 'react';


class Result extends React.Component{
  	render() {
  		return (
  			<div className="result">
  				<a href={this.props.deal.url} target="_blank" rel="noopener noreferrer">
					<h2>{this.props.deal.shop.name}</h2>
					<span className="new">New Price: ${this.props.deal.price_new.toFixed(2)}</span><br />
					<span className="old">Old Price: ${this.props.deal.price_old.toFixed(2)}</span>
				</a>
  			</div>
  		)
  	}
	}


export default Result;