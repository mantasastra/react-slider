import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import Like from "../Like/Like";

import Icon from "../../assets/icons/icon.png";

import "./Card.css";

class Card extends Component {
  render() {
    return (
      <div className="card">
        <a href={ReactHtmlParser(this.props.href)}>
          <div className="card-image">
            <img src={ReactHtmlParser(this.props.image)} alt="Random" />
          </div>
          <div className="card-header">
            <img className="card-header-icon" src={Icon} alt="Mindera Icon" />
            <p className="card-header-title">
              {ReactHtmlParser(this.props.title)}
              <span className="card-header-subtitle">
                {ReactHtmlParser(this.props.subtitle)}
              </span>
            </p>
          </div>
          <div className="card-text">
            <p>{ReactHtmlParser(this.props.text)}</p>
          </div>
        </a>
        <Like is_liked={this.props.is_liked} id={this.props.id} />
      </div>
    );
  }
}

export default Card;
