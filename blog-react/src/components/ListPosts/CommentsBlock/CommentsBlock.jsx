import React, {useEffect} from "react";
import {compose} from "redux";
import Comments from "./Comments/Comments";

const CommentsBlock = (props) => {
    return <>
        <div className="comment__wrapper">
            <form className="formComment">
                <p className="comments-header">Добавить комментарий</p>
                {/*<div className="message">*/}
                {/*    /!*Messegs*!/*/}
                {/*</div>*/}
                <input type="text" name="имя" className="input" id="nameInComment"
                       placeholder="Введите свое имя"/>
                <input type="Email" name="еmail" className="input" id="emailInComment"
                       placeholder="Введите свой Email"/>
                <textarea name="комментарий" className="input textarea" id="bodyInComment" cols="30"
                          rows="10" placeholder="Введите комментарий"/>
                <div className="btn-container">
                    <button type="button" className="btn btn-send send-post" id="addComment">
                        Добавить
                    </button>
                </div>
            </form>
           <Comments/>
        </div>
    </>
}

export default CommentsBlock;