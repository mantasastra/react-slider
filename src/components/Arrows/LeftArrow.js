import React from "react";
import Arrow from "../../assets/icons/left-arrow.svg";

import "./Arrows.css";

const LeftArrow = (props) => {
    return (
        <div className="arrow" onClick={props.handlePrevSlide}>
            <img src={Arrow} alt="Left Arrow" aria-hidden="true" />
        </div>
    )
};

export default LeftArrow;