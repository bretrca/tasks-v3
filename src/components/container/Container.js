import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import CommentsContainer from "../commentsContainer/CommentsContainer";
import InputContainer from "../inputContainer/InputContainer";
import { ColorCodes } from "../../constants/constants";
import img from "../../img/pic1.jpg";
import {
  CommentsContainerElement,
  HeadComments,
  OnlineBox,
  TitleH6,
  Picture,
  PictureContainer,
  DateText,
  Titleh2,
} from './Container.styled';

const baseUrl = "https://616d82e26dacbb001794cae4.mockapi.io/comments";

function Container() {
  const [day, setDay] = useState("");
  const [comments, setComments] = useState([])
  useEffect(() => {
    date();
    fetchComments();
  }, []);
  //todo

  /* edit comment with timestamp t less  5 min */
  function date() {
    const date = new Date();
    var options = { day: "numeric", year: "numeric", month: "long" };
    setDay(date.toLocaleDateString("en-EN", options));
  }

  const fetchComments = () => {
    axios.get(baseUrl)
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => err);
  }


  const uploadComment = (comment) => {
    axios.post(baseUrl, {
      createdAt: new Date().getTime(),
      name: "Edu Castro",
      avatar: img,
      text: comment,
      id: "2323"
    })
      .then(() => fetchComments());
  }

  const updateComment = (comment) => {
    axios.put(`${baseUrl}/${comment.id}`, comment)
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => err)
      .then(() => fetchComments());

  }


  if (!comments || !comments.length) return null

  return (
    <CommentsContainerElement>
      <HeadComments>
        <Titleh2>Olive Larson</Titleh2>
        <OnlineBox>
          <FontAwesomeIcon
            icon={faCircle}
            style={{ color: `${ColorCodes.primary}`, margin: "0px", transform: "scale(0.6)" }}
          />
          <TitleH6>ONLINE</TitleH6>
        </OnlineBox>
        <PictureContainer>
          <Picture>
            <FontAwesomeIcon
              icon={faCommentAlt}
              style={{ verticalAlign: "-0.45em", transform:"scaleX(-1)" }}
            />
          </Picture>
        </PictureContainer>
      </HeadComments>
      <DateText>{day}</DateText>
      <CommentsContainer comments={comments} updateComment={updateComment}/>
      <InputContainer uploadComment={uploadComment} />
    </CommentsContainerElement>
  );
}

export default Container;
