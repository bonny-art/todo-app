import Joi from 'joi';

export const createUserSchema = Joi.object({
	name: Joi.string().max(24).required(),
	email: Joi.string().required(),
	password: Joi.string().required(),
});
