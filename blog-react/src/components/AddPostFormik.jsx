import React from 'react';
import {Formik, Form, Field} from 'formik';
import Button from "./common/Button/Button";
import {Required} from "./common/validators";

export const AddPostFormik = (props) => {
    const isClosePopup = () => {
        props.isClosePopup(false)
    }
    const displayError = (e) => {
         props.displayErrorMessage(e)
    }
    return (
        <Formik
            initialValues={{
                "Title": '',
                "Title body": '',
            }}
            onSubmit={(values,{resetForm}) => {
                props.onSubmit(values)
                resetForm()
            }}
        >
            {({validateForm}) => (
                <Form>
                    <div className="inputs__wrapper">
                        <Field className="title input" name="Title" placeholder="Заголовок"
                               validate={Required}/>

                        <Field as={'textarea'} name="Title body" className="textarea input" rows="10" cols="45"
                               placeholder="Статья..." validate={Required}/>
                    </div>
                    <div className="button__wrapper">
                        <Button type="button" onClick={isClosePopup} className="btn btn-delete close-popup">
                            Отмена
                        </Button>
                        <Button className="btn btn-send send-post" id="addPost"
                                onClick={() => validateForm().then((e) => displayError(e))}
                                type="submit">
                            Добавить
                        </Button>
                    </div>
                </Form>

            )}
        </Formik>
    )
};

export default AddPostFormik;