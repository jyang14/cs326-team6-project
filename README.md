# cs326-team6-project

## Team TNT Producer
* [Jinchao Yang](./team/JINCHAO_YANG.md)
* [Yu Xing](./team/YU_XING.md)
* [Zhiliang Qiu](./team/ZHILIANG_QIU.md	)
* [Zhong Tang](./team/ZHONG_TANG.md)

## Project Idea: Refrigerator Tracker App
### Need
* We don't know what do we have in the fridge when we go to supermarket.
* There might be expired food in the fridge. These food waste the space of fridge till we find out that they are expired food.
* If people share rent, it hard to know the food each person own. As a result, some food might stay in the fridge forever.
* If we have multiple fridge or our fridge is divided into several block, it might waste a lot of time searching the food we want.

### App Features
* Login and check all food owned 
   * show the position
   * expired time
   * food name
* Show all expired food
* Search food

## Topic Requirements
* Data Storage
* Server-Side
* AJAX

## Development and Deployment Instructions

To get started, run the command `yarn` in the root folder, `srv` and `client` to install dependencies. 

Make a copy of `template.env` in `srv` and `client/src` as `.env` and populate fields according. Alternatively, the environmental variables in specified in the `.env` file can be set instead.

Run `yarn dev` to start a development server and run `yarn build` to make a production build.

After a production build is created, run `yarn start` to run the production server.
