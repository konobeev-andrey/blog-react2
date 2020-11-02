import React from "react";
import CommentsBlock from "../ListPosts/CommentsBlock/CommentsBlock";

const PostInPostPage = props => {
    return <>
        <div className="post">
            <h1 className="post__title">{props.post.title}</h1>
            <p className="post__body">{props.post.body}</p>
        </div>
        <CommentsBlock/>
    </>
}
export default PostInPostPage;