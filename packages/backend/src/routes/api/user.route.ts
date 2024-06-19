import authController from '@/controllers/auth.controller';
import userController from '@/controllers/user.controller';
import authLocal from '@/middlewares/auth.local';
import { requireAuth } from '@/middlewares/auth.middleware';

import { tryCatchHandler } from '@/middlewares/tryCatch';
import validateBody from '@/middlewares/validateBody';
import {
	changePasswordSchema,
	createUserSchema,
	executeRecoverySchema,
	loginUserSchema,
	requestRecoverySchema,
} from '@/schemas/usersSchema';

import { Router } from 'express';

const router: Router = Router();

// @route   POST api/user
// @desc    Register user given their email and password, returns the token upon successful registration
// @access  Public
router.post(
	'/register',
	validateBody(createUserSchema),
	tryCatchHandler(authController.registerUser.bind(authController)),
);
router.patch(
	'/verify/:verificationToken',
	tryCatchHandler(authController.verificateUser.bind(authController)),
);

router.patch(
	'/login',
	validateBody(loginUserSchema),
	authLocal,
	tryCatchHandler(authController.loginUser.bind(authController)),
);

router.patch(
	'/recover',
	validateBody(requestRecoverySchema),
	tryCatchHandler(authController.sendRecoveryEmail.bind(authController)),
);

router.patch(
	'/recover/:passwordRecoveryToken',
	validateBody(executeRecoverySchema),
	tryCatchHandler(authController.recoverPassword.bind(authController)),
);

router.patch(
	'/change-password',
	requireAuth,
	validateBody(changePasswordSchema),
	tryCatchHandler(userController.changePassword.bind(userController)),
);

router.patch(
	'/logout',
	requireAuth,
	tryCatchHandler(authController.logoutUser.bind(authController)),
);

export default router;
