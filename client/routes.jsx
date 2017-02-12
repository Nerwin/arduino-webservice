import { Meteor } from 'meteor/meteor';
import { mount } from 'react-mounter';
import React from 'react';

import { MainLayout } from '/client/main.jsx';
import App from '/client/layout/app';

FlowRouter.route("/", {
    action() {
        mount(MainLayout, {
            container: () => (<App />)
        });
    }
});

FlowRouter.route("/history", {
    action() {
        mount(MainLayout, {
            container: () => (<App />)
        });
    }
});