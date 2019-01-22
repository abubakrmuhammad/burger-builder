import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../Burger/Burger';
import BuildControls from '../../Burger/BuildControls/BuildControls';
import Modal from '../../UI/Modal/Modal';
import OrderSummary from '../../Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  bacon: 0.7,
  meat: 1.3
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false
  };

  updatePurchaseState = ingredients => {
    const totalIngredients = Object.keys(ingredients)
      .map(ingredient => ingredients[ingredient])
      .reduce((total, current) => total + current, 0);

    this.setState({ purchasable: totalIngredients > 0 });
  };

  purchaseHanlder = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    alert("Oops! Your burger can't be yours :(");
  };

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;

    const priceAddition = INGREDIENT_PRICES[type];
    const newPrice = this.state.totalPrice + priceAddition;

    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });

    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];

    if (oldCount <= 0) {
      return;
    }

    const updatedCount = oldCount - 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;

    const priceDeduction = INGREDIENT_PRICES[type];
    const newPrice = this.state.totalPrice - priceDeduction;

    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });

    this.updatePurchaseState(updatedIngredients);
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };

    for (const key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClose={this.purchaseCancelHandler}>
          <OrderSummary
            ingredients={this.state.ingredients}
            purchaseCancel={this.purchaseCancelHandler}
            purchaseContinue={this.purchaseContinueHandler}
            price={this.state.totalPrice}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          ingredients={this.state.ingredients}
          disabledInfo={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          purchase={this.purchaseHanlder}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
