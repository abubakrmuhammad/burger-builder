import React from 'react';
import Aux from '../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = props => {
  const ingredientsSummary = Object.keys(props.ingredients).map(ingredient => (
    <li key={ingredient}>
      <span>{ingredient}:</span> {props.ingredients[ingredient]}
    </li>
  ));

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientsSummary}</ul>
      <p>
        <strong>Total Price: ${props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to Cehckout?</p>
      <Button type='danger' click={props.purchaseCancel}>
        CANCEL
      </Button>
      <Button type='success' click={props.purchaseContinue}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
