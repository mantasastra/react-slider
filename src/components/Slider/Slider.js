import React, { Component } from "react";
import Card from "../Card/Card";
import LeftArrow from "../Arrows/LeftArrow";
import RightArrow from "../Arrows/RightArrow";

import "./Slider.css";
import {ResizeObserver} from "resize-observer";

class Slider extends Component {
  constructor(props) {
    // Pass props to the Parent component
    super(props);

    // Set initial state
    this.state = {
      cards: [],
      currentIndex: 0,
      translateValue: 0,
      isError: false,
      slidesPerPage: 1,
    };

    this.updateScreenSizes = this.updateScreenSizes.bind(this);
  }

  componentDidMount() {
    this.fetchCard();
    this.updateScreenSizes(this.state.slidesPerPage);
    window.addEventListener("resize", () => {
      this.updateScreenSizes(this.state.slidesPerPage);
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", () => {
      this.updateScreenSizes(this.state.slidesPerPage);
    });
  }

  fetchCard() {
    fetch("http://127.0.0.1:3001/cards/")
      .then(response => response.json())
      .then(cards => this.setState({ cards }))
      .catch(() => this.setState({ isError: true }));
  }

  updateScreenSizes(slidesNumber) {
    if (window.innerWidth > 1100) {
      slidesNumber = 3;
    } else if (window.innerWidth > 750) {
      slidesNumber = 2;
    } else if (window.innerWidth <= 750) {
      slidesNumber = 1;
    }

    this.setState({
      slidesPerPage: slidesNumber
    });
  }

  handlePrevSlide = () => {
    // Stay at the front of cards array if
    // currentIndex is 0, otherwise
    // move left by one card at a time
    if (this.state.currentIndex === 0) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue - -this.customWidth()
    }));
  };

  handleNextSlide = () => {
    const { slidesPerPage } = this.state;

    // If at the end of cards array, exits and
    // currentIndex and translateValue resets to 0
    // Also, according to the size of the screen
    // and the number of cards it
    // sets when to return to the first card.

      if (this.state.currentIndex === this.state.cards.length - slidesPerPage) {
        return this.setState({
          currentIndex: 0,
          translateValue: 0
        });
      }


    // Only run if the condition above
    // is not met.
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.customWidth()
    }));
  };

  customWidth = () => {
    return 360;
  };

  render() {
    const isError  = this.state.isError;

    if (isError) {
      return (
        <div>
          <h1>API Server down. Please try again later.</h1>
        </div>
      );
    }
    return (
      <div className="slider">
        <div
          className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: "transform ease-out 0.5s"
          }}
        >
          {this.state.cards.map(item => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              subtitle={item.subtitle}
              text={item.text}
              image={item.image_url}
              href={item.href}
              is_liked={item.is_liked}
            />
          ))}
        </div>
        <div className="slider-arrows">
          <LeftArrow handlePrevSlide={this.handlePrevSlide} />
          <RightArrow handleNextSlide={this.handleNextSlide} />
        </div>
      </div>
    );
  }
}

export default Slider;
