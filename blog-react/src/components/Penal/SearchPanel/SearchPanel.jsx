import React, {useState} from "react";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import {connect} from "react-redux";
import {setValueSearchState} from "../../../redux/valueSearchReducers";

const SearchPenal = (props) => {
    const [valueSearch, setValueSearch] = useState('');
    
    const changeValueSearch = (value) => {
        setValueSearch(value)
    }
    const changeValueSearchState = () => {
        props.setValueSearchState(valueSearch.trim())
    }
    const deleteValueSearch = () => {
        setValueSearch('')
        props.setValueSearchState("")
    }

    const onKeyPressHandler = (event) => {
        if (event.key === 'Enter') {
            changeValueSearchState()
        }
    }


    return (
        <div className="panel-search__block">
            <div className="input-search__wrapper">
                <Input onKeyPress={onKeyPressHandler} changeValueInput={changeValueSearch} valueInput={valueSearch}
                       type="text" className="input panel-search__block_input" id="inputSearch"
                       placeholder="Поиск..."/>
                {valueSearch &&
                <label onClick={deleteValueSearch} style={{cursor: 'pointer'}} className="label-dagger-search"
                       htmlFor="inputSearch">✖</label>}
            </div>

            <Button onClick={changeValueSearchState} className="btn btn-default search__btn">
                Найти
            </Button>
        </div>
    )
}

const mstp = (state) => ({})
export default connect(mstp, {setValueSearchState})(SearchPenal)
