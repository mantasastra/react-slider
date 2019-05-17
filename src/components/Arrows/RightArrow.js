import React from "react";
import Arrow from "../../assets/icons/right-arrow.svg";

import "./Arrows.css";

const RightArrow = (props) => {
    return (
            <div className="arrow" onClick={props.handleNextSlide}>
                <img src={Arrow} alt="Right Arrow" aria-hidden="true"/>
            </div>
        )
};

export default RightArrow;