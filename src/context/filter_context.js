import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/filter_reducer";
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";
import { useProductsContext } from "./products_context";
import Product from "../components/Product";

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products } = useProductsContext();

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  const SetGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };
  const SetListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  return (
    <FilterContext.Provider value={{ ...state, SetGridView, SetListView }}>
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};
