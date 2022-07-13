LAP 3 Code Challenge


Installation
- The app was created with react-create-app
- To create a react app run 'npx create-react-app my-app'
- npm install axios

Usage
- npm start - to run the app

Components of the app:
- Navigation
- Homepage, Search page with an input that renders the github repos
- Individual info page about a user's repo 

Changelog 
- Created structure of the app with components, layout & pages folders

In the Form folder
- Created a Form component which allows users to input a gitHub username 
- Fetched Git API using axios
- Added handleInput and handleSubmit functions 
- used useNavigate to open individual repo pages on click 


In index.js 
 - Imported {BrowserRouter as Router} and wrapped it around <App />

 In App.js 
 - Imported pages
 - Created Routes
 - Imported Header from layouts

In layouts -> Header -> index.js
 - Imported React, Link, Outlet 
 - Created a nav in Header function 
 - Exported Header

Bugs
- Git API call hapenns on page load and returns a 404 error in console


 