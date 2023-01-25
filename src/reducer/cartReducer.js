const cartReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SELECTED':
      return {
        ...state,
        selected: action.payload.index,
      }
    case 'INCREASE_QUANTITY':
      return {
        ...state,
      }
    case 'REDUCE_QUANTITY':
      return {
        ...state,
      }
    case 'SET_CART':
      return {
        ...state,
        cart: action.payload.cart,
      }
    default:
      return {
        ...state,
      }
  }
}

export default cartReducer
