import Item from '../components/ToDo/Item';

export function addItem(text) {
    const item = new Item(text);
    return { type : "ADD_ITEM", payload: item} 
}

export function deleteItem(id) {
    return {type: "DELETE_ITEM", payload: id}
}

export function editItem(id){
    return {type: "EDIT_ITEM", payload: id}
}

export function changeDone(text){
    return {type: "CHANGE_DONE", payload: text}
}