# Module 4 Code Challenge: Bot Battlr

Welcome to __Bot Battlr__, the one and only spot in the known universe where you can custom build your own Bot Army!

Here's the scenario: a galactic overlord has hired you, a galatic web developer, to develop a galatic web app that will allow him/her to browse through a list of robots, view a robot's details, and, if the bot is to his/her liking, enlist that bot into his army.

All of the code to style the page has been written for you, meaning that you should be adding to the code rather than editing it; your main responsibility will be to get information, render it into the right containers, and build out the page's functionality.


### What You Already Have
The following is a tree illustrating the overall component structure:



BotCard and BotSpecs are presentaional components that have been provided for you that will render out information about an individual bot formatted for a list view and for a full view, respectively. They are prestyled, and it is your responsibility to get the data into them.

BotCollection and YourBotArmy are container components. BotCollection is where all the bots will be displayed, while YourBotArmy (the green portion) will only display the bots that have been selected by the user. 

BotPage is the highest component below App, and serves as the main container for all of the pieces of the page. 


### Instructions
Follow along with these steps, making sure to read all of the instructions before beginning to code.

#### 1.  Fetching Bots

 Work on fetching data from this API: https://bot-battler-api.herokuapp.com/api/v1/bots. The response should contain an array of bot objects that are structured as follows:
  ```
    {
      "id": 301,
      "name": "gs-98",
      "health": 71,
      "damage": 85,
      "armor": 34,
      "bot_class": "Assault",
      "catchphrase": "111111111111110011001111100101110010010110001100",
      "avatar_url": "https://robohash.org/voluptasetab.png?size=300x300&set=set1",
      "created_at": "2017-12-08T14:13:45.272Z",
      "updated_at": "2017-12-08T14:13:45.272Z"
    }
  ```
   Based on the current structure of the app, think about where this array of bots needs to be stored.

#### 2.  Indexing bots

  After you have fetched the bots, work on rendering them into `BotCollection` A component called `BotCard` has been provided to you to display the information about an individual bot in a list format.

#### 3.  Enlisting bots

 Once the list is complete, work on the functionality of the list. Clicking a card should add a bot to the user's list of bots. Bots that have been chosen should be displayed within `YourBotArmy` (feel free to reuse `BotCard`)

## Checkpoint!

If you have gotten this far, you have hit the checkpoint. Your app should look like the following:

![alt text][checkpoint]

[checkpoint]: ./public/checkpoint_demo.gif "Checkpoint demo"
