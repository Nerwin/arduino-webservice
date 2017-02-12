import React, { Component, PropTypes } from 'react';
import { Dom } from 'react-dom';
import { Meteor } from 'meteor/meteor';

export default class Navbar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header"><a className="navbar-brand navbar-link" href="/">BuzzerStorm</a></div>
                    <div className="collapse navbar-collapse " id="navcol-1">
                        <ul className="nav navbar-nav navbar-left">
                            <li role="presentation"><a href="history">History</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="register"><i className="fa fa-user fa-1"> Sign Up</i></a></li>
                            <li><a href="connection"><i className="fa fa-sign-in fa-1"> Login</i></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}