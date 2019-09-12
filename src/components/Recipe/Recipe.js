import React from 'react';
import './Recipe.css';
import Presentation from '../Presentation/Presentation';
import Overview from '../Overview/Overview';
import Ingredients from '../Ingredients/Ingredients';

const Recipe = (props) => {
	const { title, description, src, overview, ingredients } = props.recipeContent;
	return (
			<div className="container">
        		<img className="recipe-pic" alt="recipe pic" src={src} />
				<Presentation title={title} description={description}/>
				<Overview overview={overview}/>
				<Ingredients ingredients={ingredients}/>
			</div>
	);
}

export default Recipe;
