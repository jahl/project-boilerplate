# Class Project Boilerplate

## Installation

1. Clone the repository:
    ```bash
      $ git clone <repo-link>
    ```

2. Install all dependencies with the following command:
    ```bash
      $ npm run install
    ```

3. Make a `.env` file, if you need to, you can use `.example.env` as a base for your own.

4. If you want, you can fill the database with test data by using the following command:
    ```bash
      $ npm run seed
    ```

5. Start the project stack with:
    ```bash
      $ npm start
    ```

## Folder Structure

* `client`: Source folder for React, this part of the application handles all of the UI.
* `controllers`: Source folder for the controllers of our Mongoose models, controls CRUD operations.
* `models`: Source folder for all of our Mongoose models.
* `routes`: Source folder for all the API routes for our application.
* `scripts`: Source folder for admin related scripts.
* `server.js`: API server file.

## Tech Stack:

This project is following the MERN stack:

* [Mongo](https://www.mongodb.com/): Fast and easy NoSQL database.
* [Express](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.
* [React](https://reactjs.org/): Javascript library for building user interfaces based on JSX.
* [Node](https://nodejs.org/en/): Javascript runtime.

## Project Peculiarities:

Due to the nature of `create-react-app`, we're using a [proxy](https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development) to
serve API requests from our Express server, this has some side effects:

* There are two different `node_modules` directories, one in the `root` for the project, the other is nside the `client` directory.
  * To install dependencies for the `SERVER` run your `npm install` commands in the `root` folder.
  * To install dependencies for `REACT` run your `npm install` commands in the `client` folder.

## Deployment

* Create a Heroku app for your app:
    ```bash
      $ heroku create <NAME-OF-YOUR-APP>
    ```

* Add the MongoLab Addon for your Heroku app:
    ```bash
      $ heroku addons:create mongolab:sandbox
    ```

* Add, commit and push your changes to heroku:
    ```bash
      $ git add .
      $ git commit -m "heroku setup"
      $ git push heroku master
    ```