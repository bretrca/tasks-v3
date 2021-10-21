import React, { useState } from "react";
import { FormElement, InputElement, Button } from "./Edit.styled";
import "./Edit.css"

const Edit = ({ editComment, ...commentData }) => {
  const { key, text, id } = commentData;
  const [comment, setComment] = useState(text);

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

  return (
    <FormElement key={key} onSubmit={editCommentHandler}>
      <InputElement name={id} value={comment} onChange={handleOnChange} />
      <Button type="submit" >Save</Button>
    </FormElement>
  );
};

export default Edit;
