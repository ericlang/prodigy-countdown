'use strict'

var moment = require('moment');


class CountDownManager {

    static getCount() {
        var currentTime = moment();
        var mayFirst = "01/05/2016 00:00:00";
        return moment.utc(moment(mayFirst,"DD/MM/YYYY HH:mm:ss").diff(moment(currentTime,"DD/MM/YYYY HH:mm:ss"))).format("DD HH:mm:ss")
    }
};


module.exports = CountDownManager;