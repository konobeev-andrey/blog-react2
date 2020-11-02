import React, {useEffect, useState} from "react";
import Button from "../../common/Button/Button";
import Popup from "../../Popup/Popup";
import Message, {useMessageContainer} from "../../common/Message";
import {useComponentVisible} from "../../Popup/UseComponentVisible";

const AddPostPenal = () => {
    const {
        ref,
        isComponentVisible,
        setIsComponentVisible
    } = useComponentVisible(true);

    const [errorMessage,displayErrorMessage] = useMessageContainer();

    const isOpenPopup = () => {
        setIsComponentVisible(false)
    }
    const isClosePopup = (pos = false) => {
        setIsComponentVisible(true)

    }

    return (
        <div className="panel-add-post__block">
            <Button onClick={isOpenPopup} name={'addPost'} className={'btn-send write-post'}>Добавить статью</Button>
            {!isComponentVisible && <div className="popup layout">
                <div className="popup__wrapper" ref={ref}>
                    <Popup displayErrorMessage={displayErrorMessage} isClosePopup={isClosePopup}/>
                </div>
            </div>}
            {errorMessage && <Message objectMessage={errorMessage} textMessage={"Пост сохранен"}/>}
        </div>
    )
}

export default AddPostPenal;
