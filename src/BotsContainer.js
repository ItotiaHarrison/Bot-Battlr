import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

class BotsContainer extends React.Component {
  state = {
    botCollection: [],
    yourBots: [4, 5]
  };

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(res => res.json())
      .then(botCollection => this.setState({ botCollection }));
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <YourBotArmy {...this.state} />
        <BotCollection {...this.state} />
      </div>
    );
  }
}

export default BotsContainer;
