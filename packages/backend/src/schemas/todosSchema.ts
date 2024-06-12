import Joi from 'joi';

export const createTodoSchema = Joi.object({
	title: Joi.string().required(),
	description: Joi.string().required(),
});

export const updateTodoSchema = Joi.object({
	title: Joi.string(),
	description: Joi.string(),
	isCompleted: Joi.boolean(),
	isPrivate: Joi.boolean(),
});
