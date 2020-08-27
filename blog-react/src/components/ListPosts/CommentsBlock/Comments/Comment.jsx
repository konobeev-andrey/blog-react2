import React from "react";


export default Comment = (props) => {
    return (
        <div className="comment">
            <p className="name">{props.name} <span>{props.email}</span></p>
            <p className="bodyComment">{props.body}</p>
        </div>
    )
}