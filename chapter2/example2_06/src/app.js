/**
 * Created by dseet on 7/14/2014.
 */
var app = {

    foo: 42,

    bar: function() {

        var bazz = function(n) {
            console.log(n);
            return n;
        };

        return bazz(7);
    }
};
