## Info
Names: Sibonay Koo, Barry Maswan, Andrew Schneer, Hunter Wapman
Title: FoodAround
Comp 20 Design Document

##__Problem Statement:__

###__Consumers:__

People don’t like waiting for food.  For many people, the food they are eating doesn’t matter as much as when it will be ready.  This is especially true for people who are in a rush and are seeking some sort of fast food or take-out.

###__Restaurants:__

The restaurant business is cutthroat.  Margins are small, and every food sale is critically important.  In addition, leftover food is sometimes wasted, often at the end of the business day.

##__Solution:__

A web based application that will provide a platform for restaurants to post food items that they have prepared ahead of time, along with a time when the food will be ready.  Users can view a list of all the food items restaurants have posted, and then buy what they want.

###__Value proposition for users:__
Don’t have to wait for food

###__Value proposition for restaurants:__

* More food sales
* More web traffic to their websites
* Opportunity to sell or give away leftover food that they would otherwise throw out
* Opportunity to set up donation systems for soup kitchens and food pantries

## __Features:__

* Web form for restaurant to input information about a food item (restaurant, location, food description, time when ready, price)
* Master list of all food items that are currently live on the site
* Ability to sort list by restaurant, distance from current location, time when ready, and price
* Ability to “buy” (reserve) a food item on the list with a single click
* Google Maps interface to display all the current food items that are live and where they are located
* Graph displaying usage data (for example, food posts per hour, food sales, etc.)

### __Pick 5:__

* Geolocation
* Server-side data persistence
* Front-end framework (React)
* Reporting with charts and graphs
* SMSes

##__Data collected and used:__

* Location and name of restaurant
* Description of food
* Price
* Time when it will be ready
* Link to restaurant’s online menu

##__Algorithms and special techniques used:__

* Sorting the list of restaurants by proximity/price/time the food will be ready etc 

##__APIs:__

* Google Maps API
* Google Graphs API

##__Wireframes:__

![image](https://raw.githubusercontent.com/tuftsdev/comp20-spring2015-team3/master/wireframes/Post.png)

