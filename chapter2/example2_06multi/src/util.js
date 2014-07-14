/**
 * Created by dseet on 7/14/2014.
 */
module.exports = function() {
    return {

        foo: 42,

        bar: function() {

            var bazz = function(n) {
                return eval(n * n);
            };
            return bazz(7);
        }
    };
};
