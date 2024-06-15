import * as Yup from 'yup';

export const todoValidationSchema = Yup.object().shape({
	title: Yup.string()
		.required('Title is required')
		.max(30, 'Title must be at most 30 characters'),
	description: Yup.string()
		.required('Description is required')
		.max(300, 'Description must be at most 300 characters'),
	isPrivate: Yup.boolean().required(),
});
