import React from "react";
import Comments from "./Comments/Comments";
import AddCommentFormik from "../../AddCommentFormik";

const CommentsBlock = (props) => {
    return <>
        <div className="comment__wrapper">
            <AddCommentFormik setComment={props.setComment}/>
           <Comments/>
        </div>
    </>
}
export default CommentsBlock