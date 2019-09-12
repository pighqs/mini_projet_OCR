import React, { Fragment } from 'react';
import './Ingredients.css';

class Ingredients extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			defaultServings: this.props.ingredients.defaultServings,
			defaultQuantities: this.props.ingredients.defaultQuantities
        };
	}

    updateServings = (action) => {
        let newDefaultServings = action === "increase" ?  this.state.defaultServings + 1 : this.state.defaultServings - 1;
        let newQuantities = this.state.defaultQuantities.map(ingredient => {
            let individualQuantity = ingredient.quantity / this.state.defaultServings;
            ingredient.quantity = individualQuantity * newDefaultServings;
            return ingredient;
        })
         
        const newState = {
            defaultServings : newDefaultServings,
            defaultQuantities : newQuantities,
        }
        this.setState(newState);
    };

   
	render() {
		const { defaultServings, defaultQuantities } = this.state;
		let ingredientsRows = defaultQuantities.map((ingredient, index) => {
			return (
				<tr key={`row ${ingredient.name}`}>
					<td>{index + 1}</td>
					<td>{ingredient.name}</td>
					<td>{ingredient.quantity}</td>
					<td>{ingredient.Metric}</td>
				</tr>
			);
		});

		return (
			<Fragment>
				<h2 className="subtitle">Ingredients</h2>
				<div className="ingredients">
					<div className="servings">
                        <span >Servings :</span>
                        <span onClick={() => this.updateServings("decrease")}>
                            <i className="fas fa-minus-circle"/>
                         </span>
                        {defaultServings} 
                        <span onClick={() => this.updateServings("increase")}>
                            <i className="fas fa-plus-circle"/>
                        </span>
                    </div>
					<table className="table is-striped is-hoverable is-fullwidth">
						<thead>
							<tr>
								<th>#</th>
								<th>Name</th>
								<th>Quantity</th>
								<th>Metric</th>
							</tr>
						</thead>
						<tbody>{ingredientsRows}</tbody>
					</table>
				</div>
				<div className="ingredients-footer">List of the recipe ingredients</div>
			</Fragment>
		);
	}
}

export default Ingredients;
