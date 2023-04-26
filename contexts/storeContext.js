import { createContext, useReducer } from "react";

export const StoreContext = createContext();
export const DispatchContext = createContext();
const initialState = {
  basket: [],
};

// The reducer function sets up cases for our functions to pick up on.
function reducer(state, action) {
  switch (action.action) {
    case "ADD_PRODUCT":
      // Check wether or not the product already exists.
      //   It recieves the action object from ADD_PRODUCT which contains the payload. We go inside the payload to find the id with "action.payload.id"
      const exists = state.basket.find((item) => item.id === action.payload.id);
      if (exists) {
        // The React way is to map and create copies to avoid mutating originals.
        // Creates a copy of the original state and maps trough the items and returns item and checks the item id. If it exists it creates a copy of that which is similar to the item from the previous copy and adds 1 to that specific item id.
        const nextBasket = state.basket.map((item) => {
          if (item.id === action.payload.id) {
            const copy = { ...item };
            copy.amount++;
            return copy;
          } else {
            return item;
          }
        });
        // Uses the new state from the above if-statement and tell the reducer to use the existing ...state and sets the basket state as nextBasket. Mimicking the initialState = {basket: []} from above.
        return { ...state, basket: nextBasket };
      } else {
        // If the product does not exist it add it to the basket
        const newItem = action.payload;
        newItem.amount = 1;
        // Returns the original state with the action object (state) and concats newItem with that state.
        return { ...state, basket: state.basket.concat(newItem) };
      }
      console.log("Does it exists?", exists);
      // Returns whatever is in the original state with the action.payload from addToBasket function in Product.js

      // if it exists, add 1

      // if it does not: create it and add 1
      return [];
  }
}

export const StoreProvider = ({ children }) => {
  // Is like useState which returns an updater method and the state.
  const [data, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={data}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </StoreContext.Provider>
  );
};
