import React from 'react'
import classNames from 'classnames'


const Input = ({className, disabled, active, ...props}) => {
    const classes = classNames(
        className,
        {active}
    )
    return (
            <input
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