# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Python server installing
### Setup server
```sh
cd .\backend\
pip install virtualenv
virtualenv venv
.\venv\Scripts\activate.bat
pip install flask Flask-PyMongo flask-cors
```
### Run server
```sh
 python src/app.py 
```
