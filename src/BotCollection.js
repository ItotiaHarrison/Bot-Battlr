import React from "react";
import BotCard from "./BotCard";
import { Card, Image, Icon } from "semantic-ui-react";

const BotCollection = props => {
  const bots = props.botCollection.map(bot => <BotCard bot={bot} />);
  return <div className="botCollection">{bots}</div>;
};

export default BotCollection;
