import React from "react";
import Posts from "../Posts/Posts";
import Penal from "../Penal/Penal";
import Message from "../common/Message";

const ListPosts = (props) => {
    return <>
        <Penal isOpenPopup={props.isOpenPopup}/>
        <main className="posts">
            {/*{props.message && <Message correct={true} text={"Пост сохранен"}/>}*/}
            {/*<div className="message">*/}
            {/*    /!*Messages*!/*/}
            {/*</div>*/}
            {/*preloader...*/}
            {/* postNotFound...*/}
            <Posts/>
        </main>
        </>
}

export default ListPosts;