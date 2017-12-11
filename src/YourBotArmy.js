import React from "react";
import { Card } from "semantic-ui-react";
const YourBotArmy = props => {
  const bots = props.yourBots.map(bot => <Card>{bot}</Card>);
  return <div className="botArmy">{bots}</div>;
};

export default YourBotArmy;
