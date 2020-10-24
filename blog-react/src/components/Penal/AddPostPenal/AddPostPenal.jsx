import React, {useEffect, useState} from "react";
import Button from "../../common/Button/Button";
import Popup from "../../Popup/Popup";
import Message from "../../common/Message";
import {useComponentVisible} from "../../Popup/UseComponentVisible";

const AddPostPenal = () => {
    const [mes, setMes] = useState(false)
    const [messageTimeout, setMessageTimeout] = useState(null);

    useEffect(() => {
        return () => clearTimeout(messageTimeout)
    })

    const {
        ref,
        isComponentVisible,
        setIsComponentVisible
    } = useComponentVisible(true);

    const isOpenPopup = () => {
        setIsComponentVisible(false)

    }

    const isClosePopup = (pos = false) => {
        setIsComponentVisible(true)
        if (pos) {
            setMes(true)
            setMessageTimeout(setTimeout(() => {
                setMes(false)
            }, 2000))
        }
    }

    return (
        <div className="panel-add-post__block">
            <Button onClick={isOpenPopup} name={'addPost'} className={'btn-send write-post'}>Добавить статью</Button>
            {!isComponentVisible && <div className="popup layout">
                <div className="popup__wrapper" ref={ref}>
                    <Popup isClosePopup={isClosePopup}/>
                </div>
            </div>}
            {mes && <Message correct={true} textMessage={"Пост сохранен"}/>}
        </div>
    )
}

export default AddPostPenal;
