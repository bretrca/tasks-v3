import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare, faPaperclip } from "@fortawesome/free-solid-svg-icons";
import "./Input.css";
import { ColorCodes } from "../../constants/constants";

import{
  ContainerInput,
  InputElement,
  Button
} from "./Input.styled"


function Input({ uploadComment}) {
  const [inputComment, setInputComment] = useState("");

  function setInput(e) {
    e.preventDefault();
    setInputComment(e.target.value);
  }

  function handleComment(e) {
    e.preventDefault();
    if (!inputComment) return;
    uploadComment(inputComment);
    setInputComment("");
  }

  return (
    <ContainerInput role="ContainerInput" onSubmit={handleComment}>
      <FontAwesomeIcon
      data-testid ="Fa-icon"
        icon={faShare}
        style={{
          transform: "scale(-2,2)",
          color: `${ColorCodes.tertiary}`,
          padding: "16px",
        }}
      />
      <InputElement
      data-testid= "input-element"
        value={inputComment}
        onChange={setInput}
        placeholder="Start typing your message here..."
      ></InputElement>
      <FontAwesomeIcon
        icon={faPaperclip}
        style={{
          transform: "rotate(-45deg) scale(1.5)",
          color: `${ColorCodes.tertiary}`,
          padding: "8px",
        }}
      />
      <Button role="button-submit" onClick={handleComment}>send</Button>
    </ContainerInput>
  );
}

export default Input;
