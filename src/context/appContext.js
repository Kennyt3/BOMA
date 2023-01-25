import { createContext, useContext, useReducer } from 'react'
import AppReducer from '../reducer/AppReducer'
const AppContext = createContext()

const AppProvider = ({ children }) => {
  const initialState = {
    lightmode: true,
    searchopen: false,
    cartopen: false,
  }
  const toggleLightmode = () => {
    dispatch({
      type: 'TOGGLE_LIGHT',
    })
  }

  const openSearch = () => {
    dispatch({
      type: 'SEARCH_OPEN',
    })
  }
  const closeSearch = () => {
    dispatch({
      type: 'SEARCH_CLOSE',
    })
  }

  const toggleCart = () => {
    dispatch({
      type: 'TOGGLE_CART',
    })
  }

  const [state, dispatch] = useReducer(AppReducer, initialState)
  return (
    <AppContext.Provider
      value={{
        useAppContext,
        state,
        lightmode: state.lightmode,
        toggleLightmode,
        searchopen: state.searchopen,
        openSearch,
        closeSearch,
        toggleCart,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}

export default AppProvider
