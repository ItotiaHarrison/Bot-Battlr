import React, { useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one

  const [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);


  useEffect(() => {
    fetch("http://localhost:8002/bots")
    .then((res) => res.json())
    .then(bots => setBots(bots))
  }, [])

  function addBotToArmy(){
    const selectBot = bots.find(bot => bot === armyBot)
    setBotArmy([...botArmy, selectBot])
  }

  function releaseBotFromArmy(){
    const remainedBotArmyList = botArmy.filter((bot) => bot !== armyBot)
    setBotArmy(remainedBotArmyList)
  }

  function deleteBot(){
  const deleteBots = bots.filter(bot => bot !== armyBot.id)
  setBots(deleteBots)
  
  const deleteArmyBots = botArmy.filter(bot => bot !== armyBot.id)
  setBotArmy(deleteArmyBots)


  fetch(`http://localhost:8002/bots/${armyBot.id}`,{
    method: 'DELETE'
  })
  }

  return (
    <div>
      <YourBotArmy botArmy={botArmy} releaseBot={releaseBotFromArmy} dischargeBot={deleteBot} />
      <BotCollection bots={bots} addBot={addBotToArmy} dischargeBot={deleteBot} />
    </div>
  )
}

export default BotsPage;
