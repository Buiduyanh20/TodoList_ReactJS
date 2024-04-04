import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import ToDoApp from "./components/ToDoApp";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers";
const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ToDoApp />
  </Provider>
);
