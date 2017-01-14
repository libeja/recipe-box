import React, { Component } from 'react';

import { connect } from 'react';

import '../style/App.css';
import Test from '../test.js';

import RecipeBox from './RecipeBox';
import NewRecipe from './NewRecipe';
import EditRecipe from './EditRecipe';

//
// import recipesReducer from './reducers/reducer-recipes';
// import viewReducer from './reducers/reducer-view';
// import reducers from './reducers/combined-reducers';


// store.dispatch({type: "ADD_RECIPE", payload: 0});
// store.dispatch({type: "CHANGE_VIEW", payload: 20});
// store.dispatch({type: "DEC", payload: 1400});

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">

          <h2>The Recipe Box</h2>
        <Test />
        </div>
        <p className="App-intro">
          Add recipes and stuff
        </p>
        <RecipeBox />
        <NewRecipe />
        <EditRecipe />
      </div>
    );
  }
}

export default App;