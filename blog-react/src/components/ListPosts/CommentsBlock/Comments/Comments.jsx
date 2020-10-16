import React, {useEffect} from "react";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getCommentsPost} from "../../../../redux/postRedusers";
import Comment from "./Comment";

const Comments = (props) => {
    return <>
            <p className="comments-header">Комментарии</p>
            <div className="comments">
                {props.comments[0]? props.comments.map( c => <Comment key={c.id} {...c}/>) : <div>Коментариев нет</div>}
            </div>
    </>
}
const CommentsContainer = (props) => {
    useEffect(()=>{
        let postId = props.match.params.id;
        props.getCommentsPost(postId)
    }, [])

    return <Comments {...props}/>
}
const mstp = (state) => ({
    comments: state.post.comments,
})
export default compose(
    withRouter,
    connect(mstp,{getCommentsPost})
)(CommentsContainer);
