# Module 4 Code Challenge: Bot Battlr

Welcome to Bot Battlr, the one and only spot in the known universe where you can custom build your own Bot Army!

Here's the scenario: a galactic overlord has hired you, a galatic web developer, to develop a galatic web app that will allow him/her to browse through a list of robots, view a robot's details, and, if the bot is to his/her liking, enlist that bot into his army.

All of the code to style the page has been written for you, meaning that you should be adding to the code rather than editing it; your main responsibility will be to get information, render it into the right containers, and build out the page's functionality.

The following is a tree illustrating the overall component structure:




Follow along with these steps, making sure to read all of the instructions before beginning to code.

1. Fetching Bots

Work on fetching data from this API: https://bot-battler-api.herokuapp.com/api/v1/bots. The response should contain an array of bot objects that are structured as follows:
```
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
  } ````
