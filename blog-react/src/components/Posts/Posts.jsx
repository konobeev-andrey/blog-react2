import React, {useEffect} from "react";
import Post from "./Post";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getPostsData} from "../../redux/postsRedusers";
import Preloader from "../common/Preloader/Preloader";


const regx = new RegExp('', 'gi');
const searchRegexp= (reg, text) => {
    return reg.test(text)
}
const searchPost = (arrPost,reg) => {
    return arrPost.filter(post => searchRegexp(reg, post.title) || searchRegexp(reg, post.body))
}



const PostsContainer = (props) => {
    useEffect(() => {
        props.getPostsData()
    }, [])

    return <Posts posts={props.posts}/>
}

const Posts = (props) => {
    const postsRevers = [...props.posts]
    return <div>
        {/*{postsRevers.length === 0*/}
        {/*    ? <Preloader/>*/}
        {/*    : postsRevers.reverse().map(p => <Post*/}
        {/*        key={p.id}*/}
        {/*        id={p.id}*/}
        {/*        title={p.title}*/}
        {/*        body={p.body}/>)}*/}
        {postsRevers.length === 0
            ? <Preloader/>
            : searchPost(postsRevers, regx).reverse().map(p => <Post
                key={p.id}
                id={p.id}
                reg={regx}
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