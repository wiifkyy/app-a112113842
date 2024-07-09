import React, { createContext, useReducer } from 'react';

const initialState = {
  title: "Selamat Datang di Aplikasi",
  user: {
    nama: "Pedro Bagas Wiraputra",
    nim: "A11.2021.13842",
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_TITLE':
      return {
        ...state,
        title: action.payload,
      };
    default:
      return state;
  }
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
