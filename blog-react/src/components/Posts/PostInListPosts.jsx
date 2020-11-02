import React from "react";
import {NavLink} from "react-router-dom";

const PostInListPosts = (props) => {
    const title = props.title.replace(props.reg, "<span style='background:rgba(69, 122, 191, 0.5); color:#fff'>$&</span>")
    const body = props.body.replace(props.reg, "<span style='background:rgba(69, 122, 191, 0.5); color:#fff'>$&</span>")

    return (
        <NavLink to={'/post/' + props.id} className="post">
            <h2 className="post__title" dangerouslySetInnerHTML={{__html:
                title}}></h2>
            <p className="post__subtitle" dangerouslySetInnerHTML={{__html:
                body}}></p>
        </NavLink>
    )
}

export default PostInListPosts;
