import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import { editItem } from '../../Actions/listActions';
import Button from "@material-ui/core/Button";

function EditForm(props) {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  function handleChange(event) {
    let t = event.target.value;
    setText(t);
  }

  function editItemEvent(event) {
    event.preventDefault();
    if (text) {
      dispatch(editItem(text))
      setText("");
      props.onHideModal();
    }
  }

  

  return (
    <form>
      <input onChange={handleChange} type="text" value={text}></input>
      <Button size="small" color='primary' variant="contained" onClick={editItemEvent}>
        Atualizar
      </Button>
    </form>
  );
}

export default EditForm;
