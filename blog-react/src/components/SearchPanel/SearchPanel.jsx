import React from "react";
import Button from "../common/Button/Button";

const SearchPenal = () => {
    return (
        <div className="panel-search__block">
            <div className="input-search__wrapper">
                <input type="text" className="input panel-search__block_input" id="inputSearch"
                       placeholder="Поиск..."/>
                <label className="label-dagger-search hide" htmlFor="inputSearch">✖</label>
            </div>

            <Button className="btn btn-default search__btn">
                Найти
            </Button>
        </div>
    )
}

export default SearchPenal;