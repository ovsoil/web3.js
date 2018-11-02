'use strict';

var formatters = require('../formatters');
var Method = require('../method');
var utils = require('../../utils/utils');

var Dpos = function Dpos(web3) {
    this._requestManager = web3._requestManager;

    var self = this;

    methods().forEach(function(method) {
        method.attachToObject(self);
        method.setRequestManager(self._requestManager);
    });
    
}

var methods = function () {
    var getValidDelegater = new Method({
        name: 'getValidDelegater',
        call: 'dpos_getValidDelegater',
        params: 1,
    });

    var getValidDelegaters = new Method({
        name: 'getValidDelegaters',
        call: 'dpos_getValidDelegaters',
        params: 1,
    });

    return [
        getValidDelegater,
        getValidDelegaters
    ];
};


module.exports = Dpos;
