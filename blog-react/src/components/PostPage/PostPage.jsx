import React, {useEffect} from "react";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {getPostOpen} from "../../redux/postRedusers";
import {connect} from "react-redux";
import CommentsBlock from "../ListPosts/CommentsBlock/CommentsBlock";

const PostPage = (props) => {

    return <>
        <main className="fullPost">
            <div className="breadcrumb">
                <a href="/">Главная страница</a> Статья
            </div>
            <div className="post">
                <h1 className="post__title">{props.post.title}</h1>
                <p className="post__body">{props.post.body}</p>
            </div>
            <CommentsBlock/>
        </main>
    </>
}

const PostPageContainer = (props) =>{

    useEffect(()=>{
        let postId = props.match.params.id;
        props.getPost(postId)
    }, [])

    return (<PostPage {...props} />)
}
const mstp = (state) => ({
    post: state.post.post,
})
export default compose(
    withRouter,
    connect(mstp,{getPost: getPostOpen})
)(PostPageContainer);
