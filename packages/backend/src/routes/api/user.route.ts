import authController from '@/controllers/auth.controller';
import { tryCatchHandler } from '@/middlewares/tryCatch';
import { Router } from 'express';

const router: Router = Router();

// @route   POST api/user
// @desc    Register user given their email and password, returns the token upon successful registration
// @access  Public
router.post(
	'/register',
	tryCatchHandler(authController.createUser.bind(authController)),
);
router.patch(
	'/verify/:verificationToken',
	tryCatchHandler(authController.verificateUser.bind(authController)),
);

export default router;
