'use strict';

// should be used to send info to a logging server
exports.log = value => {
    console.log(value);
    return value;
};
