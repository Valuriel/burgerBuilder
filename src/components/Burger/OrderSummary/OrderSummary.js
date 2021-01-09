import React from 'react';

import Auks from '../../../hoc/Auks';

// Modal information is outsourced to this js file, since the BurgerBuilder.js is already too crowded!

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return (
        <li key={igKey}>
            <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
        </li>);
    });

    return (
        <Auks>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </Auks>
    );
};

export default OrderSummary;