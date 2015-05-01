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
* Users
    * can signUp/signIn to view information
* Master list of all food items that are currently live on the site
* Ability to "offer" food items to the general public
    * browse offers you've made
    * browse offers you've made that have been claimed
* Ability to "claim” (reserve) a food item on the list with a single click
    * browse all offers available to claim
    * browse offers you have claimed
* Google Maps interface to display all the current food items that are live and where they are located
* Send emails when:
    * you signup
    * you post an offer
    * you claim an offer

### __Requirements:__

* GitHub Repositories:
    * client-side: 
        * github: https://github.com/tuftsdev/comp20-spring2015-team3
        * gh-pages: http://tuftsdev.github.io/comp20-spring2015-team3
    * server-side: 
        * github: https://github.com/hunter-/teamServer
        * heroku: https://c20t3server.herokuapp.com/
* Server-side Framework Used:
    * node.js
* APIs:
    * Google Maps
        * for geolocation
    * Google Geocoding
        * for address validation
    * sendgrid 
        * for emails

### __Pick 5:__

* Geolocation
* Server-side data persistence
    * mongodb
* Client-side data persistence
    * 'your offers'
* Front-end frameworks
    * React
    * Bootstrap
* emails

##__Data collected and used:__

* Users:
    * username
    * name
    * email
    * password
* Offers:
    * Food Description
    * Time when ready
    * Location
    * Price
    * Username of Seller
    * If claimed: 
        * Username of Buyer

##__Screenshots:__

###Homepage

####Desktop
![alt text](https://github.com/tuftsdev/comp20-spring2015-team3/blob/master/screenshots/map-desktop.png "Homepage for Desktop")

####Mobile
![alt text](https://github.com/tuftsdev/comp20-spring2015-team3/blob/master/screenshots/map-mobile.png "Homepage for Mobile")

###Homepage

####Desktop
![alt text](https://github.com/tuftsdev/comp20-spring2015-team3/blob/master/screenshots/post-desktop.png "Post Screen for Desktop")

####Mobile
![alt text](https://github.com/tuftsdev/comp20-spring2015-team3/blob/master/screenshots/post-mobile.png "Post Screen for Mobile")

###Homepage

####Desktop
![alt text](https://github.com/tuftsdev/comp20-spring2015-team3/blob/master/screenshots/signin-desktop.png "Sign-in Screen for Desktop")

####Mobile
![alt text](https://github.com/tuftsdev/comp20-spring2015-team3/blob/master/screenshots/signin-mobile.png "Sign-in Screen for Mobile")

#Comments by Ming (on original submission 2015/03/05)
1. I love your list of features, your team did it right
2. I'm not really buying into using Google Graphs --seems rather useless
3. I assume data will be entered by users?
4. Overall: 15/15
