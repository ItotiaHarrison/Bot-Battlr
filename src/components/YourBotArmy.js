import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ botArmy, releaseBot, dischargeBot }) {


  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          <h3>{botArmy.map((bot) => (
            <BotCard bot={bot} handleBot={releaseBot} handleDelete={dischargeBot} />))}</h3>
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
