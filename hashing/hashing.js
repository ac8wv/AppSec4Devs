var bcrypt = require('bcrypt');
var password = 'mysupersecurepassword'
var saltRounds = 10;

bcrypt.hash(password, saltRounds, function(err, hash) {
    // in real life we would store the has in a DB
    console.log('The password is ' + password + ' with ' + saltRounds + ' salt rounds');
    console.log('The password hash is ' + hash);

    // compare password to the hash stored in your database
    bcrypt.compare(password, hash, function(err, res) {
        // res should be "true"
        console.log(res);
    });

    // compare a bad password to what's stored in your database
    bcrypt.compare('badpassword', hash, function(err, res) {
        // res should be "false"
        console.log(res);
    });
});