import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import { addItem } from '../../Actions/listActions';
import Button from "@material-ui/core/Button";

function TodoForm(props) {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  function handleChange(event) {
    let t = event.target.value;
    setText(t);
  }

  function addItemEvent(event) {
    event.preventDefault();
    if (text) {
      dispatch(addItem(text))
      setText("");
      props.onHideModal();
    }
  }

  

  return (
    <form>
      <input onChange={handleChange} type="text" value={text}></input>
      <Button size="small" color='primary' variant="contained" onClick={addItemEvent}>
        Adicionar
      </Button>
    </form>
  );
}

export default TodoForm;
