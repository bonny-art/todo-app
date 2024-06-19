import HttpError from '@/helpers/HttpError';
import { userService } from '@/services/user.service';
import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: process.env.SECRET_KEY as string,
};

const jwtLogin = new JwtStrategy(jwtOptions, async (jwt_payload, done) => {
	try {
		const user = await userService.findById(jwt_payload.id);

		if (!user) {
			return done(
				HttpError(401, 'Unauthorized access. Authentication failed'),
				false,
			);
		}

		return done(null, user);
	} catch (error) {
		done(HttpError(400, 'Bad request'));
	}
});

passport.use(jwtLogin);

export const requireAuth = passport.authenticate('jwt', { session: false });
