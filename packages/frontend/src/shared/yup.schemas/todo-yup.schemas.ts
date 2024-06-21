import * as Yup from 'yup';

export const todoValidationSchema = Yup.object().shape({
	title: Yup.string()
		.required('Title is required')
		.max(24, 'Title must be at most 24 characters'),
	description: Yup.string()
		.required('Description is required')
		.max(300, 'Description must be at most 300 characters'),
	visibility: Yup.string()
		.required('Visibility is required')
		.oneOf(
			['private', 'public'],
			'Visibility must be either private or public',
		),
});
