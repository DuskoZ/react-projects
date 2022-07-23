import React from "react";

const Button = (props) => {
    return (
        <button className={props.cssClass} onClick={props.onClick}>
            {props.icon}
        </button>
    );
};

export default Button;
