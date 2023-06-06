import { createContext, useContext } from "react";

export const DataContext = createContext({
  data: undefined, //data
  setData: () => {},
});

export const useDataContext = () => useContext(DataContext);
