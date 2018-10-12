# Forex App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started

After cloning this repository, you can either run this app using<br>
```
 npm start
 ``` 
or 
```
yarn start
``` 
command. If you're using `docker`, you can simply run 
```
docker-compose up --build
``` 
after cloning this repository to run the app for the first time, after running the app for the first time, you can just run
```
docker-compose up
```
without `--build` option.

#### Packages used

Other than the ones bundled by `create-react-app`, the packages used by this app is following.

- [`axios`](https://github.com/axios/axios) - HTTP client for fetching data from API.
- [`react-bootstrap`](https://react-bootstrap.github.io/) - Front-end framework for basic components.
- [`enzyme`](https://github.com/airbnb/enzyme) - JavaScript testing utility.

#### Folder structure

```
.
 |-public
 |-src
   |---__tests__
   |-----components
   |-------__snapshots__
   |---components
   |---core
   |-----api
   |-----handler
   |---layout
   |---service
```

The `App.js` file serves as the  main entry point for the React app.

- `components` folder hosts the smart components (components with it's own function and state).<br>
- `core` folder hosts the main functionality for the app. As an example this app uses this folder to host the fetching and component handler functionality in this folder.<br>
- `layout` folder hosts the stateless components used within the app.<br>
- `service` folder hosts the general helper used in the app, e.g. function for converting value, validation, etc.

#### Flow

The app separates most of it's function to separate files to help simplify the code and increase readability when the code is scaled up.

For example, in the `App` component, there are multiple functions that modified the component state, like `onChange` function that's responsible for updating the input state as the user inserted the numbers. As you can see in the `App.js` file, there is no function for it. Instead, the functions responsible for handling changes and other things are put inside the `handler` folder within `core`.

Here's the code for the `onChange` function inside the file:

```javascript
const textInputHandler = {
  onChange: function(event) {
    this.setState({
      value: event.target.value.replace(/\D/, ''),
    })
  },
}

export default textInputHandler
```
The code doesn't differ much from what we see from it's regular placement inside the component.

To bind the handler to the component we assigned the handler object to the component and binds the function to `this`.

```javascript
import TextInputHandler from './core/handler/TextInputHandler'

constructor(props) {
    super(props)
    this.state = initialState

    Object.assign(this, TextInputHandler)

    this.onChange = this.onChange.bind(this)
  }
```

### Running test

To run tests, run:
```
npm test
```
or if you use yarn, run:
```
yarn test
```
