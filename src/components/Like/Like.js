import React, { Component } from "react";
import HeartIcon from "../../assets/icons/like.svg";
import HeartActiveIcon from "../../assets/icons/like-active.svg";

import "./Like.css";

class Like extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLiked: this.props.is_liked,
            heartIcon: HeartIcon
        }
    }

    componentDidMount() {
        this.likeCard();
    }

    /**
     * Function that triggers the action
     * of liking and un-liking.
     */
    likeCard = () => {
        if (!this.state.isLiked) {
            this.setState(() => {
                return {
                    isLiked: true,
                    heartIcon: HeartIcon
                }

            });
        } else {
            this.setState(() => {
                return {
                    isLiked: false,
                    heartIcon: HeartActiveIcon,
                }
            })
        }
    };

    updateLike(isLiked) {
            fetch(`http://127.0.0.1:3001/cards/${this.props.id}`, {
                headers: {"Content-Type": "application/json; charset=utf-8"},
                method: "PATCH",
                body: JSON.stringify({
                    is_liked: isLiked,
                })
            })
                .then(res => res.json())
                .then(like => like)
                .catch(err => err);
    }

    render() {
        return (
            <div className="like-heart" onClick={() => {this.likeCard(); this.updateLike(this.state.isLiked);} }>
                <img src={this.state.heartIcon} alt="Green Heart Button" />
            </div>
        )
    }
}

export default Like;