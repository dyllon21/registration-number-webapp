# registration-numbers-webapp

# registration_numbers

* Registration numbers displays for valid numbers in Cape Town, Paarl and Bellville.

* Displays number plates with rounded corners and a yellow background, with a black border.

* Users are able to add to the plates in the app.

* No numbers will be added if the field is empty..
* New added registration numbers are displayed at the bottom of the list.

## How to start :

 1. create an express server for the app
 2. create a model (mongodb schema)
 3. create routes file and views folder
 4. create a public folder (css files)
 5. create a github repository and deploy
 6. deploy to heroku
 7. connect to mLab

# Prerequisites

    For this app you will need the following software and authentication:

 * Node.js and npm installed.
 * an existing Node.js app.
 *   a free Heroku account.
 *   the Heroku CLI (command line interface).

    Start your app locally using the heroku local command which is installed as part of the Heroku CLI.

    $ heroku local web Your app should now be running on http://localhost:5000/.



# Backend (Server side).

 clone this <a href=' https://greetings-web-app.herokuapp.com/'>Repo</a> to your GitHub machine.

# How to clone :

  Go to the terminal of your machine and navigate to your folder of choice, and copy and paste the following code :
  $ git clone
   https://github.com/dyllon21/regNumbers.git Registration_app

# Installing:

NodeJS :

* Before you try to install NodeJS open terminal and try to run it by typing, node -v. If NodeJS is installed it should tell you which version you have. Alternatively the command will fail and you will need to install it.

* To install it on Ubuntu you can use the apt-get package manager.

* Alternatively you can use nvm, the Node Version Manager to manage the version of NodeJS on your PC.

Mongodb

How to Install MongoDB - only do Part 1.

Package.json dependencies

"dependencies": {
    "body-parser": "^1.17.1",
    "express": "^4.15.2",
    "express-flash": "0.0.2",
    "express-handlebars": "^3.0.0",
    "express-session": "^1.15.3",
    "mongoose": "^4.10.1"
  }
* To install all dependencies required for the app to run, on the terminal navigate to the registration_webapp folder, and type npm install .

# Running it locally :

* Open terminal and navigate to the registration_webapp directory.
* Once you are located in the root folder, type:

   nodemon or
   node index.js

   The app is deployed at Heroku and gitHub. The app also uses a MongoDB database hosted on mLab.


   * You are able to find this app at :

https://hidden-atoll-88461.herokuapp.com/regNumbers
