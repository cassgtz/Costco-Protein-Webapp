# Costco Protein Finds Web Application
#### Project Overview
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It is a multi-page web application built on the MERN stack that displays high-protein items from Costco. Users are able to search items by name, protein amount, and food category. Users can also post reviews for each item.

* Frontend: React
  * multi-page using routing
* Backend: Node, ExpressJS
  * server handles 2 GET and 1 POST requests
* Database: MongoDB
  * API built using NodeJS and MongoDB

##### Overview of main page:
 ![](MainPage.png)
##### Overview of individual items page:
 ![](ItemPage.png)

## Replication Instructions
1. You must enable Node >= 14.0.0 and npm >= 5.6 to run this app. Install it here: https://nodejs.dev/en/download/
2. Clone the repository for the BACKEND of the project to your machine: [https://github.com/cassgtz/Costco-Protein-Webapp-BACKEND.git](https://github.com/cassgtz/Costco-Protein-Webapp-BACKEND.git)
3. Open your terminal, navigate to the BACKEND directory, and run this command: `node server.js`
  This will connect you to the database & run the server on port 5000.

4. Clone this current repository to your machine.
5. In the project directory, run `npm install --save` to install required packages. Run available scripts as usual. 

## Available Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
