import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcryptjs';
import { userService } from '@/services/user.service';
import passport from 'passport';
import HttpError from '@/helpers/HttpError';

passport.use(
	new LocalStrategy(
		{
			usernameField: 'email',
			passwordField: 'password',
		},
		async (email, password, done) => {
			try {
				const user = await userService.findByEmail(email);

				if (!user) {
					return done(HttpError(404, 'Incorrect email'), false);
				}

				if (!user.verify) {
					return done(
						HttpError(404, 'Your email is not verified'),
						false,
					);
				}

				const isMatch = await bcrypt.compare(password, user.password);

				if (!isMatch) {
					return done(HttpError(404, 'Incorrect password'), false);
				}

				return done(null, user);
			} catch (error) {
				return done(HttpError(400, 'Bad request'));
			}
		},
	),
);

export default passport.authenticate('local', { session: false });
