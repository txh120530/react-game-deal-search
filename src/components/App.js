import React from 'react';
import SearchBar from './SearchBar';
import ResultList from './ResultList';
import GameInfo from './GameInfo';
import itad from '../api/itad';
import config from '../config.json'

class App extends React.Component{
	state = {deals: [], game: []};

	
	onSearchSubmit = async term => {
		const name = await itad.get('/v02/game/plain/', {
			params: {key : config.ITAD_Key, title: term}
		});

		this.searchDeals(name.data.data.plain);
		this.searchGame(name.data.data.plain);
	};

	searchDeals = async (plain) => {
		const response = await itad.get('/v01/game/prices/', {
				params: {key : 'e3537810781c145572faea9fa68ef6473bc920f3', plains: plain},
	});
		
		const list = response.data.data[plain].list;
		this.setState({deals: list});
	};


	searchGame = async (plain) => {
		const response = await itad.get('/v01/game/info/', {
				params: {key : 'e3537810781c145572faea9fa68ef6473bc920f3', plains: plain},
	});
		

		// console.log("Response: " + JSON.stringify(response.data.data[plain]));
		const list = response.data.data[plain];
		this.setState({game: list});
	};



	render() {
		return (
			<div className="ui container" style={{marginTop: '10px'}}>
			<SearchBar onSubmit={this.onSearchSubmit} />
			<span style={{textAlign:"center", display:"block"}}> Found: {this.state.deals.length} deals</span>

			<GameInfo game={this.state.game} />

			<div className="ui element">
			<ResultList deals={this.state.deals}  />
			</div>
			</div>
		);
	}
}

export default App;