# Namaste-React
This repository contains all the learnings and notes I created while learning React JS from #Namaste-React Course, food studio is a project, built while learning the concepts.

## Food-Studio
Order food from the confort of your home, we show the latest restaurants available in your city, with all the details. 
Pick a dish, add to cart, place order, get delivered.

## Tech - Stack
1. Frontend Library: React JS
2. Styling: Tailwind CSS
3. Database: Firebase
4. Bundler: Parcel
5. Authentication: Firebase-Auth
6. State Management: Redux Toolkit

## Working of project
1. We fetch the restaurants of your city from Swiggy API, getting the live data.
2. Display them with Area name, Cuisines Category and Ratings.
3. Search Restaurants by Name.
4. For any restaurant, you can checkout all the different type of dishes available with details and prices per quantity.
5. Add to cart
6. Authenticate yourself
7. Place Order.

## Improvements to make
1. Not responsive for Mobile phones
2. Cart data is not stored anywhere, it should be in local storage for not logged in users to avoid losing on refresh page.
3. While Signing up, user name is not displayed in the profile point instantly, needs a refresh. It doesn't happen in logging in process.
4. Improve the design, take user address and payment details.
5. Add feature to search different cities, currently working for Prayagraj only.

## How to run on your local
1. Clone the repository 
2. Run ```npm init```
3. Run ```npm start```.
4. Make sure you've allow CORS extension installed in your browser.

Drop a 💫 if you liked it.
