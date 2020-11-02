import React, {useEffect, useState} from "react";

const Message = (props) => {

    const creatMessage = () => {
        if (typeof props.objectMessage === "string") return props.objectMessage
        else {
            let message = ''
            for (let key in props.objectMessage) {
                message += key + ': ' + props.objectMessage[key] + '\n '
            }
            return message
        }
    }

    let style;
    if (props.correct === undefined) {
        style = Object.keys(props.objectMessage).length === 0 || typeof props.objectMessage === "string" ? "message correct" : "message no-correct"
    } else {
        style = props.correct ? "message correct" : "message no-correct"
    }
    return (<div className={style}>
        {creatMessage()}
    </div>)

}
export const useMessageContainer = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [messageTimeout, setMessageTimeout] = useState(null);

    useEffect(() => {
        return () => clearTimeout(messageTimeout)
    })

    const displayErrorMessage = e => {
        if (typeof e === "string" || Object.keys(e).length !== 0) {
            if (messageTimeout) {
                setErrorMessage(null)
                setMessageTimeout(null)
            }
            setErrorMessage(e)
            setMessageTimeout(setTimeout(() => {
                setErrorMessage(null)
                setMessageTimeout(null)
            }, 2000))
        }
    }
    return [errorMessage, displayErrorMessage]
}

export default Message;