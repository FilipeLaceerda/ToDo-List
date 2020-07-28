import React, { useState } from "react";
import Card from "./Card";
import { Delete } from "@material-ui/icons";
import { Done, DoneAll, Edit, Visibility } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { deleteItem, changeDone } from "../../Actions/listActions";
import EditModal from "./EditModal";

function Concluded(props) {
  if (props.done) {
    return <DoneAll fontSize="small" color="primary" />;
  } else {
    return <Done fontSize="small" color="primary" />;
  }
}

function ListItem(props) {
  const [showModal, setShowModal] = useState(false);

  function onHideModal() {
    setShowModal(false);
  }
  const dispatch = useDispatch();
  return (
    <li>
      <Card className={props.item.done ? "done item" : "item"}>
        {props.item.text}
        <div>
          <button
            onClick={() => {
              dispatch(changeDone(props.item.id));
            }}
          >
            <Concluded done={props.item.done}></Concluded>
          </button>

          <button
            onClick={() => {
              dispatch(deleteItem(props.item.id));
            }}
          >
            <Delete fontSize="small" color="secondary" />
          </button>

          <button
            onClick={() => {
              setShowModal(true);
            }}
          >
            <Edit fontSize="small" color="action" />
          </button>
          <EditModal show={showModal} onHideModal={onHideModal}></EditModal>


          <button>
            <Visibility fontSize="small" color="action" />
          </button>
        </div>
      </Card>
    </li>
  );
}

export default ListItem;
