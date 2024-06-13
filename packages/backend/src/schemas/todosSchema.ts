import Joi from 'joi';

export const createTodoSchema = Joi.object({
	title: Joi.string().max(150).required(),
	description: Joi.string().max(300).required(),
});

export const updateTodoSchema = Joi.object({
	title: Joi.string().max(150),
	description: Joi.string().max(300),
	isCompleted: Joi.boolean(),
	isPrivate: Joi.boolean(),
});
