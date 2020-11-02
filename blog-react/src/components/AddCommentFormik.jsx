import React from 'react';
import {Formik, Form, Field} from 'formik';
import Message, {useMessageContainer} from "./common/Message";
import Button from "./common/Button/Button";
import {Required, validateEmail} from "./common/validators";
import {connect} from "react-redux";
import {setComment} from "../redux/postRedusers";
import {getNewId} from "../selectors/selector";

const AddCommentFormik = (props) => {
    const [errorMessage,displayErrorMessage] = useMessageContainer();
    const displayError = (e) => {
       displayErrorMessage(e)
    }

    return (
        <Formik
            initialValues={{
                "name": '',
                "email": '',
                "body": '',
            }}
            onSubmit={(values ,{resetForm}) => {
                resetForm()
                props.setComment({...values,id:props.commentId,postId:props.postId})
                displayErrorMessage('Комментарий опубликован')
            }}
        >
            {({validateForm}) => (
                <Form className="formComment">
                    <p className="comments-header">Добавить комментарий</p>
                    <Field type="text"
                           name="name"
                           className="input"
                           id="nameInComment"
                           placeholder="Введите свое имя"
                           validate={Required}/>
                    <Field type="text"
                           name="email"
                           className="input"
                           id="emailInComment"
                           placeholder="Введите свой Email"
                           validate={validateEmail}/>
                    <Field as={'textarea'}
                           name="body"
                           className="input textarea"
                           id="bodyInComment" cols="30"
                           rows="10"
                           placeholder="Введите комментарий"
                           validate={Required}/>
                    <div className="btn-container">
                        <Button className="btn btn-send send-post"
                                id="addComment"
                                onClick={() => validateForm().then((e) => displayError(e))}
                                type="submit">
                            Добавить
                        </Button>
                    </div>
                    {errorMessage && <Message objectMessage={errorMessage}/>}
                </Form>
            )}
        </Formik>
    )
};

const mstp = (state) => ({
    postId: state.post.post.id,
    commentId: getNewId(state.post.comments)
})
export default connect(mstp,{setComment})(AddCommentFormik)