import Joi from 'joi';

export const createUserSchema = Joi.object({
	name: Joi.string().max(24).required(),
	email: Joi.string().required(),
	password: Joi.string().required(),
});

export const loginUserSchema = Joi.object({
	email: Joi.string().required(),
	password: Joi.string().required(),
});

export const requestRecoverySchema = Joi.object({
	email: Joi.string().required(),
});

export const executeRecoverySchema = Joi.object({
	password: Joi.string().required(),
});

export const changePasswordSchema = Joi.object({
	oldPassword: Joi.string().required(),
	newPassword: Joi.string().required(),
});
