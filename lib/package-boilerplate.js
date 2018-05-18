/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/*
 * Copyright (c) 2018, Joyent, Inc.
 */

var assert = require('assert-plus');
var uuidv4 = require('uuid/v4');
var vasync = require('vasync');
var VError = require('verror');

// ---- Exports

module.exports = {
    hi: function hi() {
        console.log('hi');
    }
};
