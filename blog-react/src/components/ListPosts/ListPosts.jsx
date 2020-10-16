import React from "react";
import Posts from "../Posts/Posts";
import Penal from "../Penal/Penal";


const ListPosts = (props) => {
    return <>
        <Penal />
        <main className="posts">
            {/*preloader...*/}
            {/* postNotFound...*/}
            <Posts/>
        </main>
        </>
}

export default ListPosts;