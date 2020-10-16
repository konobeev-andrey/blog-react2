import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {toggleWindow} from "../../redux/MessageWindowReducers";

const Message = (props) => {
    const creatMessage = () => {
        if(props.textMessage) return props.textMessage
        else if( props.arrayMessage && Object.keys(props.arrayMessage).length === 0) return 'Пост сохранен'
        else{
            let message= ''
            for (let key in props.arrayMessage) {
                message+= key +': ' + props.arrayMessage[key]+'\n '
            }
           return message
        }
    }

    const style = props.correct ? "message correct" : "message no-correct"

    return (<div className={style}>
        {creatMessage()}
    </div>)

}
const mstp = (state) => ({
})
export default compose(
    connect(mstp, {toggleWindow}),
)(Message)