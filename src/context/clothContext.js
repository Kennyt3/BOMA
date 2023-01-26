import { useReducer, useContext, createContext } from 'react'
import clothReducer from '../reducer/clothReducer'
import { clothdata } from '../data/clothdata'
const clothContext = createContext()

const ClothProvider = ({ children }) => {
  const initialState = {
    data: clothdata,
    selected: undefined,
    size: 0,
    value: 1,
    cart: [],
  }

  const selectIndex = (index) => {
    dispatch({
      type: 'SET_SELECTED',
      payload: {
        index: index,
      },
    })
  }
  const increaseQuantity = (index) => {
    selectIndex(index)
    let newArr = [...state.data, (state.data[index].val += 1)]
    dispatch({
      type: 'INCREASE_QUANTITY',
      payload: {
        newdata: newArr,
      },
    })
  }
  const reduceQuantity = (index) => {
    selectIndex(index)
    let newArr = [
      ...state.data,
      state.data[index].val > 1 && (state.data[index].val -= 1),
    ]
    dispatch({
      type: 'REDUCE_QUANTITY',
      payload: {
        newdata: newArr,
      },
    })
  }
  const increaseSize = (index) => {
    selectIndex(index)
    let newArr = [
      ...state.data,
      state.data[index].num < state.data[index].sizeArr.length - 1 &&
        (state.data[index].num += 1),
    ]

    dispatch({
      type: 'INCREASE_SIZE',
      payload: {
        newdata: newArr,
      },
    })
  }
  const reduceSize = (index) => {
    selectIndex(index)
    let newArr = [
      ...state.data,
      state.data[index].num > 0 && (state.data[index].num -= 1),
    ]
    dispatch({
      type: 'REDUCE_SIZE',
      payload: {
        newdata: newArr,
      },
    })
  }

  const reset = (index) => {
    let newData = [
      ...state.data,
      (state.data[index].num = 0),
      (state.data[index].val = 1),
    ]
    dispatch({
      type: 'RESET_VALUES',
      newdata: newData,
    })
  }

  const setExisting = (productItem) => {
    return state.cart.findIndex(
      (item) => item.id === productItem.id && item.num === productItem.num
    )
  }

  const addToCart = (productItem, index) => {
    let newCart
    let existingIndex = setExisting(productItem)
    selectIndex(index)
    if (
      state.cart[existingIndex]?.num !== productItem.num ||
      state.cart[existingIndex]?.id !== productItem.id
    ) {
      newCart = [...state.cart, productItem]
    } else {
      newCart = [
        ...state.cart.filter(
          (item) => item.id !== productItem.id || item.num !== productItem.num
        ),
        {
          ...state.cart[existingIndex],
          val: state.cart[existingIndex].val + productItem.val,
        },
      ]
    }
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        newcart: newCart,
      },
    })
    reset(index)
  }

  const removeFromCart = (index) => {
    let newCart = state.cart.filter(
      (item) => state.cart.indexOf(item) !== index
    )
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: {
        newcart: newCart,
      },
    })
  }
  const [state, dispatch] = useReducer(clothReducer, initialState)
  return (
    <clothContext.Provider
      value={{
        state,
        increaseQuantity,
        reduceQuantity,
        increaseSize,
        reduceSize,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </clothContext.Provider>
  )
}

export const useClothProvider = () => {
  return useContext(clothContext)
}
export default ClothProvider
