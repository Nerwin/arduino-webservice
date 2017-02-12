import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

Games = new Mongo.Collection('games');



if (Meteor.isServer) {
    Meteor.publish('Games', function gamespub() {
        return Games.find();
    });
}