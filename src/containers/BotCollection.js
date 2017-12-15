import React from "react";
import BotCard from "../components/BotCard";

const BotCollection = ({botCollection, view}) => {

  const bots = botCollection.map((bot,index) => {
  	return <div className ="ui column"><BotCard key={index} bot={bot} view={view} /></div>
  });
  
  return (
  <div className="ui four column grid">
  	<div className='row'>
  		{bots}
  	</div>
  </div>
  )
};

export default BotCollection;
