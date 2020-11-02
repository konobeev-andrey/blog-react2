import React from 'react'
import classNames from 'classnames'


const Input = ({className, disabled, active, changeValueInput, valueInput, ...props}) => {

    const classes = classNames(
        className,
        {active}
    )
    const onChangeInput = (value) => {
        changeValueInput(value.target.value)
    }
    return (
            <input
                value={valueInput}
                onChange={onChangeInput}
                {...props}
                className={classes}
                disabled={disabled}
            />
    )
}

Input.defaultProps = {
    className: '',
    disabled: false,
    active: false

}
export default Input;