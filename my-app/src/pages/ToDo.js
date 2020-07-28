import React, { useState } from "react";
import Modal from "../components/ToDo/Modal";
import TodoForm from "../components/ToDo/TodoForm";
import EditModal from "../components/ToDo/EditModal";
import EditForm from "../components/ToDo/EditForm";
import List from "../components/ToDo/List";
import { Add } from "@material-ui/icons";
import "../components/ToDo/ToDo.css";

import { createStore } from "redux";
import { Provider } from "react-redux";
import listReducer from "../Reducers/listReducer";

const SAVED_ITEMS = "savedItems";

function persistState(state) {
  localStorage.setItem("SAVED_ITEMS", JSON.stringify(state));
}

function loadState() {
  const actualState = localStorage.getItem(SAVED_ITEMS);
  if (actualState) {
    return JSON.parse(actualState);
  } else {
    return [];
  }
}

const store = createStore(listReducer, loadState());

store.subscribe(() => {
  persistState(store.getState());
});

function App() {
  const [showModal, setShowModal] = useState(false);

  function onHideModal() {
    setShowModal(false);
  }

  return (
    <div className="container">
      <Provider store={store}>
        <header className="headerTodo">
          <h1>ToDo List</h1>
          <button
            className="addButton"
            onClick={() => {
              setShowModal(true);
            }}
          >
            <Add size="small" color="primary" />
          </button>
        </header>
        <List></List>
        <EditModal show={showModal} onHideModal={onHideModal}>
          <EditForm onHideModal={onHideModal}>
          </EditForm>
        </EditModal>
        <Modal show={showModal} onHideModal={onHideModal}>          
          <TodoForm onHideModal={onHideModal}></TodoForm>
        </Modal>
      </Provider>
    </div>
  );
}

export default App;