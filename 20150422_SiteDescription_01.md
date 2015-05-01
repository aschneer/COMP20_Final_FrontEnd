#Site Description
##04/22/2015

###Overview
- 2 pages
	- Main page, buy/sell food
	- Login page, sign up for an account or sign in to an existing account

###Main page layout

- Header (nav bar)
	- Toggle between "buy" mode and "sell" mode
	- Sign-in / sign-up button
- Primary content region (most of the page, to left of list pane)
- List pane on right side

###Main page operation

- Buy mode
	- Primary content area has google map with food items ready to buy
	- List pane toggles between all offers, and offers the current user has "claimed"
	- User claims food by clicking a listing and following additional steps...
- Sell mode
	- Primary content area becomes offer submission form
	- List pane toggles between list of unclaimed live offers from current user account, and claimed offers from current user account
- Both modes
	- Clicking "sign-in / sign-up" button redirects to login page
	- If user is signed in, the "sign-in / sign-out" button becomes a "sign-out" button
	- Clicking the "sign-out" button signs the user out of their account if they are logged in

###Login page layout

- Sign in form
	- Username
	- Password
- Sign in button
- Sign up form
	- Username
	- Password
	- Name
	- Email
	- Phone number
- Sign up button

###Login page operation

- User types information into either sign up or sign in form
- User clicks either "sign in" or "sign up" button to send form data to server
- If sign-in or sign-up is successful, user is redirected to main page where they get a message on the nav bar saying "successfully created account" or "successfully signed in."  Also, on the top
right of the screen, the "sign-in / sign-up" button has changed to "Welcome, [username]", and a "sign-out" button appears.