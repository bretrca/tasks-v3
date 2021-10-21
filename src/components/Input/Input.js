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

  useEffect(() => {}, []);

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
    <ContainerInput onSubmit={handleComment}>
      <FontAwesomeIcon
        icon={faShare}
        style={{
          transform: "scale(-2,2)",
          color: `${ColorCodes.tertiary}`,
          padding: "16px",
        }}
      />
      <InputElement
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
      <Button onClick={handleComment}>send</Button>
    </ContainerInput>
  );
}

export default Input;
