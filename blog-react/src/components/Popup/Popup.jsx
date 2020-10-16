import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {getIdNewPost} from "../../selectors/selector";
import {setPostApi} from "../../redux/postsRedusers";
import FieldLevelValidationExample from "../TestFormik";

const Popup = (props) => {

    const onSubmit = (formData) => {
        const data = {title: formData["Title"], body: formData["Title body"], id: props.idNewPost}
        props.setPostApi(data).then(() => props.isClosePopup(true))
    }

    return (
            <FieldLevelValidationExample onSubmit={onSubmit} isClosePopup={props.isClosePopup}/>
    )
}

const mstp = (state) => ({
    idNewPost: getIdNewPost(state.posts.data)
})
export default compose(
    connect(mstp, {setPostApi}),
)(Popup)