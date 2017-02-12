import React, { Component, PropTypes } from 'react';
import { Dom } from 'react-dom';
import { Meteor } from 'meteor/meteor';

export default class Game extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event, instance) {
        event.preventDefault();
        console.log("Click handled ", event.currentTarget.id);
    }

    render() {
        if (typeof this.props.game == 'undefined') {
            return (
                <p>Oops can't find the game history ...</p>
            )
        } else {
            return (
                <div className="card text-center">
                    <h1 className="name-card text-center">Game N°{this.props.number}</h1>
                    <div className="text-card text-left">Date : {this.props.game.createdAt}</div>
                    <div className="text-card text-justify">Loser number : {this.props.game.loserId}</div>
                </div>
            )
        }
    }
}

Game.propTypes = {
    'game': React.PropTypes.any.isRequired,
    'game': React.PropTypes.object,
    'number': React.PropTypes.any.isRequired,
    'number': React.PropTypes.number,
};