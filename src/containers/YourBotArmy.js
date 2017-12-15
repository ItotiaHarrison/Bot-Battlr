import React from "react";
import BotCard from "../components/BotCard";


const YourBotArmy = props => {
  const {botCollection, yourBots, view} = props


  const bots = yourBots.map((botId,index) => {
  	let foundBot = botCollection.find(bot => bot.id === botId)
  	return (
      <div key={index} className="ui three wide column">
        <BotCard cardType="remove" view={view} bot={foundBot}/>
      </div>
    )
  });

  return (
    
      <div className='ui segment inverted olive bot-army'>
        <div className="ui five column grid">
        	<div className="row bot-army-row">
        		{bots}
        	</div>
        </div>
      </div>
    
  )
};

export default YourBotArmy;
