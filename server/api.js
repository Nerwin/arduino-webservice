if (Meteor.isServer) {

    console.log("restivus init");

    var Api = new Restivus({
        useDefaultAuth: true,
        prettyJson: true
    });

    console.log("Actual Games : \n", Games.find().fetch());

    Api.addRoute('games/', { authRequired: false }, {
        get: function () {
            return Games.find().fetch();
        },
        post: function () {
            try {
                if (this.bodyParams.hasOwnProperty('loserid') && this.bodyParams.loserid !== '') {
                    let game = {};
                    game.loserId = this.bodyParams.loserid;
                    game.createdAt = moment().format("DD/MM/YY");

                    Games.insert(game);
                    return { status: 'success', newGame: game };
                } else {
                    return { status: 'error', message: 'Parameter loserid is missing or is empty' };
                }
            } catch (e) {
                console.log(e);
                return { status: 'error', message: 'error detected : '+ e.message };
            }
        },
    });
}