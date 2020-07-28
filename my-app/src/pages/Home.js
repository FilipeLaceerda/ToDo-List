import React from "react";
import Header from "../components/Header/Header";
import Form from "../components/Form/Form";
import { createStore } from "redux";
import { Provider } from "react-redux";
import registerReducer from "../Reducers/registerReducer";

function Home() {
  const SAVED_USERS = "savedUsers";

  function persistState(state) {
    localStorage.setItem("SAVED_USERS", JSON.stringify([state]));
  }

  function loadState() {
    const actualState = localStorage.getItem(SAVED_USERS);
    if (actualState) {
      return JSON.parse(actualState);
    } else {
      return [];
    }
  }

  const store = createStore(registerReducer, loadState());

  store.subscribe(() => {
    persistState(store.getState());
  });
  return (
    <div>
      <Provider store={store}>
        <Header></Header>
        <Form></Form>
      </Provider>
    </div>
  );
}
export default Home;
