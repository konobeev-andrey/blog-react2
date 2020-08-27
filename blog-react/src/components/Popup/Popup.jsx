import React from "react";
import Button from "../common/Button/Button";
import Input from "../common/Input/Input";
import {Field, reduxForm} from "redux-form";
import {compose} from "redux";
import {connect} from "react-redux";
import {getIdNewPost} from "../../selectors/selector";
import {setPostApi} from "../../redux/postsRedusers";


const AddPostForm = (props) => {
    return(
            <div className="popup__wrapper">
                <form onSubmit={props.handleSubmit}>
                <div className="inputs__wrapper">
                    <Field component={'input'} type="text" className="title input" name="title" placeholder="Заголовок"/>
                    <Field component={'textarea'} rows="10" cols="45" name="body" className="textarea input"
                              placeholder="Статья..."/>
                </div>
                <div className="button__wrapper">
                    <Button onClick={props.isClosePopup} className="btn btn-delete close-popup">
                        Отмена
                    </Button>
                    <Button className="btn btn-send send-post" id="addPost">
                        Добавить
                    </Button>
                </div>
                </form>
            </div>

    )
}
const AddPostReduxForm = reduxForm({
    form: 'addPost'
})(AddPostForm)


const Popup = (props) => {
    const onSubmit = (formData) => {
        const data = {title: formData.title, body: formData.body, id: props.idNewPost}
        props.setPostApi(data).then(()=> props.isClosePopup())
    }
    return (<div className="popup layout">
                <AddPostReduxForm  onSubmit={onSubmit} isClosePopup={props.isClosePopup}/>
        </div>
    )
}

const mstp = (state) => ({
    idNewPost: getIdNewPost(state.posts.data)
})
export default compose(
    connect(mstp, {setPostApi}),
)(Popup)