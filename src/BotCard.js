import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const BotCard = props => {
  let botType;
  props.bot.bot_class === "Assault"
    ? (botType = <Icon name="military" />)
    : props.bot.bot_class === "Defender"
      ? (botType = <Icon name="shield" />)
      : (botType = <Icon name="ambulance" />);
  return (
    <Card className="botCard" key={props.bot.id} dataId={props.bot.id}>
      <Image src={props.bot.avatar_url} />
      <Card.Content>
        <Card.Header>
          {props.bot.name} {botType}
        </Card.Header>
        <Card.Meta />
        <Card.Meta>
          <small>{props.bot.catchphrase}</small>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <span>
          <Icon name="heartbeat" />
          {props.bot.health}
        </span>

        <span>
          <Icon name="lightning" />
          {props.bot.damage}
        </span>
      </Card.Content>
    </Card>
  );
};

export default BotCard;
