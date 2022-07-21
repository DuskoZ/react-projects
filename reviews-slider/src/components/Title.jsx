import React from "react";

const Title = (props) => {
    return (
        <div className="title">
            <h2>
                <span>/</span>
                {props.title}
            </h2>
        </div>
    );
};

export default Title;
