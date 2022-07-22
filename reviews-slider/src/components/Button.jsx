import React from "react";

const Button = (props) => {
    return <button className={props.cssClass}>{props.icon}</button>;
};

export default Button;
