import React from 'react'
import classNames from 'classnames'


const Button = ({children, onClick, className, disabled, active, ...props}) => {
    const classes = classNames(
        'btn',
        className,
        {active}
    )
    return (
            <button
                {...props}
                className={classes}
                disabled={disabled}
                onClick={onClick}
            > {children} </button>
    )
}

Button.defaultProps = {
    children: 'Default button',
    onClick: () => {console.log('Default button')},
    className: '',
    disabled: false,
    active: false

}
export default Button;