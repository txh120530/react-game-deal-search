import React from 'react';


const GameInfo = (props) =>{
	console.log(props.game);

	return (
		<div className="ui container" style={{textAlign:"center"}}>
			<h2>{props.game.title}</h2>

			<img src={props.game.image} alt=""/>
		</div>
	);
  
}


export default GameInfo;