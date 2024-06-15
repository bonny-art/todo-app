import React from 'react';
import { TodoModalEditProps, addTodoFormikT } from '~shared/types/todo.type';

import { Formik, Field, Form, FormikHelpers } from 'formik';
import { todoValidationSchema } from '~shared/yup.schemas/yup.schemas';

const TodoModalEdit = ({
	todo,
	onSaveClick,
}: TodoModalEditProps): React.ReactNode => {
	const initialValues = {
		title: todo?.title || '',
		description: todo?.description || '',
		visibility: todo?.isPrivate ? 'private' : 'public',
	};

	const handleSubmit = (
		values: addTodoFormikT,
		actions: FormikHelpers<addTodoFormikT>,
	): void => {
		const newTodo = {
			title: values.title,
			description: values.description,
			isPrivate: values.visibility === 'private' ? true : false,
		};

		if (todo) {
			onSaveClick(newTodo, todo.id);
		} else {
			onSaveClick(newTodo);
		}

		actions.setSubmitting(false);
	};

	return (
		<div>
			<Formik
				initialValues={initialValues}
				validationSchema={todoValidationSchema}
				onSubmit={handleSubmit}
			>
				{({ errors, touched }) => (
					<Form>
						<Field
							name="title"
							placeholder="Type your todo title"
						/>
						{touched.title && errors.title && (
							<div className="error-styled">{errors.title}</div>
						)}

						<Field
							name="description"
							placeholder="Type your todo description"
						/>
						{touched.description && errors.description && (
							<div className="error-styled">
								{errors.description}
							</div>
						)}

						<div role="group" aria-labelledby="my-radio-group">
							<label>
								<Field
									type="radio"
									name="visibility"
									value="public"
								/>
								Public
							</label>
							<label>
								<Field
									type="radio"
									name="visibility"
									value="private"
								/>
								Private
							</label>
						</div>

						<button type="submit">Save</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default TodoModalEdit;
