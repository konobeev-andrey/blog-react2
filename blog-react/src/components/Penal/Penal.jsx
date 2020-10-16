import React from "react";
import SearchPenal from "./SearchPanel/SearchPanel";
import AddPostPenal from "./AddPostPenal/AddPostPenal";

const Penal = (props) => {

    return (
        <div className="penal">
            <SearchPenal/>
            <AddPostPenal/>
        </div>
    )
}

export default Penal;