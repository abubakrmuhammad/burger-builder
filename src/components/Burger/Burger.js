import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {
  let ingredients = Object.keys(props.ingredients)
    .map(ing => {
      return [...Array(props.ingredients[ing])].map((_, index) => {
        return <BurgerIngredient key={ing + index} type={ing} />;
      });
    })
    .reduce((result, currentValue) => {
      return result.concat(currentValue);
    }, []);

  if (ingredients.length === 0)
    ingredients = <p>Please start adding ingredients!</p>;

  return (
    <div className='Burger'>
      <BurgerIngredient type='bread-top' />
      {ingredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
};

export default burger;
