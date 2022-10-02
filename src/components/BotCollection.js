import React from "react";
import BotCard from "./BotCard"

function BotCollection({ bots, addBot, dischargeBot }) {

  return (
    <div className="ui four column grid">
      <div className="row">
        {<ul>{bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} handleBot={addBot} handleDelete={dischargeBot}></BotCard>
        ))}</ul>

        }
        Collection of all bots

      </div>
    </div>
  );
}

export default BotCollection;
