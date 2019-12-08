import React from 'react';

class SearchBar extends React.Component{
	state = { term: ''};

	onFormSubmit = (e) => {
		e.preventDefault();

		// Invoke onSubmit prop in App.js with the term as the value
		this.props.onSubmit(this.state.term);
	}


	render() {
		return (
		<div className="ui segment">
			<form onSubmit={this.onFormSubmit} action="#" className="ui form">
			<div className="field">
				<label>Game Deal Search</label>
				<input value={this.state.term} onChange={(e) => this.setState({term: e.target.value})} type="text"/>
			</div>
			</form>
		</div>
		);
	};
}

export default SearchBar;