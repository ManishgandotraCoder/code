const config = require('config');
const jwt = require("passport-jwt")
const JWTStrategy = jwt.Strategy;
const ExtractJWT = jwt.ExtractJwt;
const dotenv = require("dotenv")
const User = require("../models/userModel");

dotenv.config();
const opts = {
	jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
	secretOrKey: 'TOKEN4983294820KFRKJJ'
}
const passport = (passport) => {
	passport.use('jwt', new JWTStrategy(opts,
		async function (jwt_payload, done) {
			console.log("jwt_payload", jwt_payload.username)
			const getUser = await User.findOne({ username: jwt_payload.username });
			if (getUser) {
				return done(null, getUser);
			}
			return done(null, false);
		}
	));

}
module.exports = passport