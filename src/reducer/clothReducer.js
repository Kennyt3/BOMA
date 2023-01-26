const clothReducer = (state, action) => {
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
    case 'INCREASE_SIZE':
      return {
        ...state,
      }
    case 'REDUCE_SIZE':
      return {
        ...state,
      }
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: action.payload.newcart,
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: action.payload.newcart,
      }
    case 'RESET_VALUE':
      return {
        ...state,
        data: action.payload.newdata,
      }

    default:
      return {
        ...state,
      }
  }
}

export default clothReducer
