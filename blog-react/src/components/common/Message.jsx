import React, {useEffect} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {toggleWindow} from "../../redux/MessageWindowReducers";

const Message = (props) => {
    useEffect(() =>{
        setTimeout(()=>{
            props.toggleWindow()
        }, 2000)
    })
    const style = props.correct ? "message correct": "message no-correct"
    return (
        <div className={style}>
            {props.text}
        </div>
    )
}
const mstp = (state) =>({
    OpenWindow:state.messageWindow.OpenWindow
})
 export default compose(
    connect(mstp, {toggleWindow}),
)(Message)