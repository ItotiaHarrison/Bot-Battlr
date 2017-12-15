import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotSpecs from "../components/BotSpecs";


class BotsPage extends React.Component {
  state = {
    botCollection: [],
    yourBots: [],
    currentViewedBot: null,
    listView: true
  };

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(res => res.json())
      .then(botCollection => this.setState({ botCollection }));
  };

  seeDetails = (botId) => {
    this.setState({
      currentViewedBot: botId,
      listView: false
    })
  };

  seeAll = () => {
    this.setState({
      currentViewedBot: null,
      listView: true
    })
  };

  enlist = (botId) => {
    let newList = this.state.yourBots.slice()
    newList.push(botId)

    this.setState({
      yourBots: newList,
      currentViewedBot: null,
      listView: true
    })
  };


  // handleChange = (name, value) => {
  //   this.setState({
  //     [name]: value
  //   })
  // };

  // applyFilters = () => {

  //   let filtered = this.state.botCollection.filter(bot => {

  //     let nameFilter = true
  //     if (this.state.searchTerm){
  //       nameFilter = bot.name.includes(this.state.searchTerm)
  //     }

  //     return nameFilter
  //   })

  //   return filtered
  // }

  

  render() {

    let displayedView;
    let displayedBot = this.state.currentViewedBot ? this.state.botCollection.find(bot => bot.id === this.state.currentViewedBot) : null;

    // let filteredBots = this.applyFilters()

    if (this.state.listView) {
      displayedView = <BotCollection botCollection={this.state.botCollection} view={this.seeDetails}/>
    } else {
      displayedView = <BotSpecs bot={displayedBot} seeAll={this.seeAll} enlist={this.enlist}/>
    }

    return (
      <div>
        <YourBotArmy {...this.state} view={this.seeDetails} />
        {displayedView}
      </div>
    );
  }
}

export default BotsPage;
