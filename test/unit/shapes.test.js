/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/*
 * Copyright (c) 2018, Joyent, Inc.
 */
'use strict';

const tap = require('tap');

const shapes = require('../../lib/shapes.js');

tap.test('Circle', (tt) => {
    tt.test('area', (t) => {
        let c = new shapes.Circle({color: 'blue', radius: 1});
        t.equals(c.area(), Math.PI);
        c = new shapes.Circle({color: 'blue', radius: 2});
        t.equals(c.area(), 2 * 2 * Math.PI);
        t.end();
    });
    tt.end();
});
