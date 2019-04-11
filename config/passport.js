// The passport jwt authentication strategy
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("users");
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "()SHIPHOP";

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      // get the user associated with the jwt_payload
      let user = User.findById(jwt_payload.id);
      try {
        if (user) {
          return done(null, user);
        }
      } catch (error) {
        console.error(error);
      }
    })
  );
};
