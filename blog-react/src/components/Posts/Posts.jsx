import React, {useEffect} from "react";
import PostInListPosts from "./PostInListPosts";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getPostsData} from "../../redux/postsRedusers";
import Preloader from "../common/Preloader/Preloader";
import NotFound from "../common/NotFound/NotFound";


const PostsContainer = (props) => {
    useEffect(() => {
        props.getPostsData()
    },[])

    return <Posts {...props}/>
}


const Posts = (props) => {

    const regx = new RegExp(props.valueSearch, 'gi');
    const searchRegexp = (reg, text) => {
        return reg.test(text)
    }
    const searchPost = (arrPost, reg) => {
        if (props.valueSearch === '') return arrPost
        return arrPost.filter(post => searchRegexp(reg, post.title) || searchRegexp(reg, post.body))
    }

    const postsFound = searchPost([...props.posts], regx).reverse().map(p => <PostInListPosts
        key={p.id}
        id={p.id}
        reg={regx}
        title={p.title}
        body={p.body}/>)
    const postRender = postsFound.length !== 0
        ? postsFound
        : <NotFound text={`Статей по запросу «${props.valueSearch}» не найдено`}/>

    return <div>
        {props.posts.length === 0
            ? <Preloader/>
            : postRender}
    </div>
}

const mstp = (state) => ({
    posts: state.posts.data,
    valueSearch: state.valueSearch.valueSearch
})
export default compose(
    connect(mstp, {getPostsData}),
    withRouter,
)(PostsContainer)