# Hacker News App
Creating a react application powered by the hacker news firebase api.

## Project structure
Generated with `tree /f` in powershell

```
├───actions
│       index.js
│       
├───api
│       index.js
│       
├───components
│   │   App.js
│   │   
│   ├───comments
│   │       ReactComment.js
│   │       ReactComments.js
│   │       
│   ├───layout
│   │       ReactFooter.js
│   │       ReactHeader.js
│   │       ReactMain.js
│   │       
│   ├───loaders
│   │       ReactCommentPlaceholder.js
│   │       ReactSpinner.js
│   │       
│   └───stories
│       │   ReactAskStories.js
│       │   ReactBestStories.js
│       │   ReactJobs.js
│       │   ReactNewStories.js
│       │   ReactShowStories.js
│       │   ReactTopStories.js
│       │   
│       └───details
│               ReactStory.js
│               ReactStoryDescription.js
│               
├───constants
│       index.js
│       
├───helpers
│       index.js
│       
├───logo
│       snooping.svg
│       
└───reducers
        index.js
```

## Routes
The available routes are accessible through the front end. The header menu provides automatic routing to these routes upon clicking.

- `/best-stories`
- `/top-stories`
- `/new-stories`
- `/ask-stories`
- `/show-stories`
- `/jobs`

## Sources
Note: The hacker news api lists everything as an item, therefore an individual request must be sent for each item (story, job, comment, user etc). This poses some challenges in how to structure the overall application and how content is fetched, stored and loaded. Recursive calls for comments are particularly slow.

- [Hacker news api documentation](https://github.com/HackerNews/API)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
