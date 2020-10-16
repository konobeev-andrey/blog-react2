import React, {useEffect, useState} from 'react';
import {Formik, Form, Field} from 'formik';
import Message, {MessageContainer} from "./common/Message";
import Button from "./common/Button/Button";

function Required(value) {
    let error;
    if (!value) {
        error = 'Required';
    }
    return error;
}


export const FieldLevelValidationExample = ( props) => {
    const [displayMessage, setDisplayMessage] = useState(null);
    let messageTimeout ;
    const errorMessage = e => {
        if(Object.keys(e).length !== 0){
            setDisplayMessage(e)

            messageTimeout = setTimeout(cloose, 2000)
        }
    }
    useEffect(()=>{
       return () => {
           clear()
       }
    })
    const clear = () => {

        clearTimeout(messageTimeout)
        // setDisplayMessage(null)
    }
    const cloose= () => {
        setDisplayMessage(null)
        clear()
    }


    const isClosePopup = () => {
        props.isClosePopup(false)
    }

    return (
            <Formik
                initialValues={{
                    "Title": '',
                    "Title body": '',
                }}
                onSubmit={values => {
                    props.onSubmit(values)
                }}
            >
                {({ validateForm}) => (
                        <Form>
                            <div className="inputs__wrapper" >
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
                                        onClick={() => validateForm().then((e) => errorMessage(e))}
                                        type="submit">
                                    Добавить
                                </Button>
                            </div>

                            {displayMessage && <Message arrayMessage={displayMessage} correct={false}/>}
                        </Form>

                )}
            </Formik>
    )
};

export default FieldLevelValidationExample;