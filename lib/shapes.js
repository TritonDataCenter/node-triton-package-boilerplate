/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/*
 * Copyright (c) 2018, Joyent, Inc.
 */
'use strict';

var assert = require('assert-plus');

function Circle(opts) {
    assert.object(opts, 'opts');
    assert.number(opts.radius, 'opts.radius');
    assert.string(opts.color, 'opts.color');
    this.radius = opts.radius;
    this.color = opts.color;
}

Circle.prototype.area = function area() {
    return Math.pow(this.radius, 2) * Math.PI;
};

module.exports = {
    Circle: Circle
};
