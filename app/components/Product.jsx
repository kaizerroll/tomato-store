import React from 'react'
import { Link } from 'react-router'
import { fetchCart, changeItemQuantity, itemIncrement } from 'APP/app/reducers/cart'
import store from 'APP/app/store'

const Product = (product = {}) => {
  // HOW TO DEAL WITH ISSUE OF PRODUCTS THAT ARE OUT OF STOCK?
  // I WOULD IDEALLY LIKE THE IMAGE TO BECOME GREYSCALE.
  // WE THINK THAT WOULD JUST BE A CSS CLASS FOR GREYSCALE.
  // ALSO PENDING: MAKING A LINK TO THE CART VIEW
  function onClick(e) {
    store.dispatch(itemIncrement(product.id))
  }

  return (
          <div className="jumbotron">
            <h1>{ product.name }</h1>
            <img src={ product.imageURL } />
            <p>${product.price}</p>
            <p>Remaining stock is only... {product.inventory}</p>
            {/* <p>NutritionFacts pending: {nutritionFacts}</p> */}
            <p><a className="btn btn-primary btn-lg" onClick= { onClick }>Add To Cart</a></p>
          </div>
  )
}

export default Product
