import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {getNewId} from "../../selectors/selector";
import {setPostApi} from "../../redux/postsRedusers";
import AddPostFormik from "../AddPostFormik";

const Popup = (props) => {

    const onSubmit = (formData) => {
        const data = {title: formData["Title"], body: formData["Title body"], id: props.idNewPost}
        props.setPostApi(data).then(() => {
            props.isClosePopup(true)
            props.displayErrorMessage("Статья опубликована")
        })
    }

    return (
            <AddPostFormik displayErrorMessage={props.displayErrorMessage} onSubmit={onSubmit} isClosePopup={props.isClosePopup}/>
    )
}

const mstp = (state) => ({
    idNewPost: getNewId(state.posts.data)
})
export default compose(
    connect(mstp, {setPostApi}),
)(Popup)