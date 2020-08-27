import React from "react";
import SearchPenal from "../SearchPanel/SearchPanel";
import Button from "../common/Button/Button";

const Penal = (props) => {
    return (
        <div className="penal">
            <SearchPenal/>
            <div className="panel-add-post__block">
                <Button onClick={props.isOpenPopup} name={'addPost'} className={'btn-send write-post'}>Добавить статью</Button>
            </div>
        </div>
    )
}

export default Penal;