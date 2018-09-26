/**
 * @license The MIT License (MIT)
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 */

'use strict';

// public
module.exports = {
    // base rules
    extends: require.resolve('spa-eslint'),

    globals: {
        core: false,
        gettext: false,
        _: false
    },

    // override any settings from the "parent" configuration
    rules: {}
};
