import React from "react";
import CommentElement from "../CommentElement/CommentElement"
import Edit from "./Edit";


function Comments({ comments, updateComment }) {

  function editComment(updatedComment) {

    updateComment(updatedComment)
  }

  return (
    <div>
      {comments.map((cmmnt, i) => {
        const key = `${cmmnt.name}-${i}`;

        return (
          <>
            {Math.floor(Date.now() / 1000) -
              Math.floor(cmmnt.createdAt / 1000) <
              300 ? (
                <Edit {...cmmnt} editComment={editComment} />
            ) : (
              <>
                <CommentElement key={key} user={cmmnt} />
              </>
            )}
          </>
        );
      })}
    </div>
  );
}

export default Comments;
