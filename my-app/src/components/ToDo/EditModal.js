import React from "react";
import Card from "./Card";

function EditModal(props) {
  function hideModal(e) {
    let target = e.target;
    if (target.id === "editModal") {
      props.onHideModal();
    }
    console.log(target);
  }

  return (
    <div
      id="editModal"
      onClick={hideModal}
      className={props.show ? "editModal" : "editModal hide"}
    >
      <Card className="cardModal">{props.children}</Card>
    </div>
  );
}

export default EditModal;
