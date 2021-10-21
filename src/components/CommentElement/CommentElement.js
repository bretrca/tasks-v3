import React from "react";
import {
  Box,
  Name,
  PictureContainer,
  Picture,
  Text,
  TextContainer,
} from "./CommentElement.styled";

function CommentElement({ user }) {
  return (
    <Box>
      <PictureContainer>
        <Picture key={user.avatar} src={user.avatar}></Picture>
      </PictureContainer>
      <TextContainer>
        <Name key={user.name}>{user.name}</Name>
        <Text key={user.text}>{user.text}</Text>
      </TextContainer>
    </Box>
  );
}

export default CommentElement;
