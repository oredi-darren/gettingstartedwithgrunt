/**
 * Created by dseet on 7/14/2014.
 */
var add = require('./math').add;
exports.increment = function(b) {
    return add(b, 1);
};
