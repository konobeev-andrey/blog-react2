import React, {useEffect} from "react";
import Post from "./Post";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getPostsData} from "../../redux/postsRedusers";

const PostsContainer = (props) => {
    useEffect(()=>{
        props.getPostsData()
    },[])

    return <Posts posts={props.posts}/>
}

const Posts = (props) => {
    const postsRevers = [...props.posts]
    return <div>
        {postsRevers.reverse().map(p => <Post
            key={p.id}
            id={p.id}
            title={p.title}
            body={p.body}/>)}
    </div>
}

const mstp = (state) => ({
    posts: state.posts.data
})
export default compose(
    connect(mstp, {getPostsData}),
    withRouter,
)(PostsContainer)