import React, { PropTypes, Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Game from '/client/component/game.jsx';

class App extends Component {
    constructor(props) {
        super(props);
    }

    renderGame() {
        if (typeof this.props.games != "undefined" && this.props.games.length > 0) {
            let number = 1;
            return this.props.games.map((game) => (
                <Game key={game._id} game={game} number={number++} />
            ));
        } else {
            return <h1>No history games</h1>;
        }
    }

    render() {
        return (
            <div>
                <h1>Welcome to BuzzerStorm</h1>
                {this.renderGame()}
            </div>
        )
    }
}

export default createContainer(() => {
    Meteor.subscribe("Games");

    return {
        games: Games.find().fetch(),
    };
}, App);