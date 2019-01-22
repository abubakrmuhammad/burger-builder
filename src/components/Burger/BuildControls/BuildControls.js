import React from 'react';
import './BuildControls.css';

import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Meat', type: 'meat' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' }
];

const buildControls = props => (
  <div className='BuildControls'>
    <p>
      Current Price: <strong>${props.price.toFixed(2)}</strong>
    </p>

    {controls.map(control => (
      <BuildControl
        key={control.label}
        label={control.label}
        add={() => props.addIngredient(control.type)}
        remove={() => props.removeIngredient(control.type)}
        ingredientNo={props.ingredients[control.type]}
        disabled={props.disabledInfo[control.type]}
      />
    ))}
    <button
      className='OrderButton'
      disabled={!props.purchasable}
      onClick={props.purchase}>
      Order Now
    </button>
  </div>
);

export default buildControls;
