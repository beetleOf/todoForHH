import { Outlet } from "react-router-dom";
import NavBar from "./ui/NavBar";
import { createContext, useState } from "react";
import { Provider } from "react-redux";
import { store } from "../store";

export const SearchContext = createContext(); // контекст для управляемого инпута

export default function Root() {
  const [search, setSearch] = useState(""); // состояние управляемого инпута
  return (
    <>
      <Provider store={store}>
        <SearchContext.Provider value={{ search, setSearch }}>
          <NavBar />
          <Outlet />
        </SearchContext.Provider>
      </Provider>
    </>
  );
}
