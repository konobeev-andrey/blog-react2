import React, {useEffect} from "react";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {getPostOpen} from "../../redux/postRedusers";
import {connect} from "react-redux";
import NotFound from "../common/NotFound/NotFound";
import Preloader from "../common/Preloader/Preloader";
import PostInPostPage from "./PostInPostPage";

const PostPage = (props) => {

    return <>
        <main className="fullPostContainer">
            <div className="fullPost">
                <div className="breadcrumb">
                    <a href="/">Главная страница </a> Статья
                </div>
                {!(Object.keys(props.post).length === 0) && !props.post.error && <PostInPostPage post={props.post}/>}
            </div>
            {props.post.error && <NotFound text={'Статья не найдена'}/>}
            {Object.keys(props.post).length === 0 && <Preloader/>}
        </main>
    </>
}

const PostPageContainer = (props) => {

    useEffect(() => {
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
    connect(mstp, {getPost: getPostOpen})
)(PostPageContainer);
