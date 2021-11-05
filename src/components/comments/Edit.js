import React, { useState } from "react";
import { FormElement, InputElement, Button } from "./Edit.styled";
import "./Edit.css"

const Edit = ({ editComment, ...commentData}) => {
  const { key, text, id, createdAt } = commentData;
  const [comment, setComment] = useState(text);
  const [editing, setEditing] = useState(true);

  function editCommentHandler(e) {
    e.preventDefault();
    editComment({
      ...commentData,
      text: comment,
    });
  }
  
  function handleOnChange({ target }) {
    const { value } = target;
    
    setComment(value);
  }
  function handleEdit(e){
    e.preventDefault();
    setEditing((prevState) => !prevState);
  }

  return (
    <FormElement key={key} onSubmit={editCommentHandler} className ="Form-edit">
      <InputElement name={id} value={comment} onChange={handleOnChange} />
{editing?

      <Button type="submit"  className ="Button-edit" onClick = {handleEdit}>Save</Button>:
      (
        Math.floor(Date.now() / 1000) -
              Math.floor(createdAt / 1000) <
              300 ?
      <Button type="submit"  className ="Button-edit" onClick = {handleEdit}>Edit</Button>
      :
      <Button style ={{display:"none"}} />
      )

}
    </FormElement>
  );
};

export default Edit;
