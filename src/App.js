import React from 'react';
import './stylesheets/App.css';
import data from './mockdata/recipe.json'
import Recipe from './components/Recipe/Recipe';

const App = () => <Recipe recipeContent={data}/>

export default App;
