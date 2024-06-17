import React, { useMemo } from 'react';
import { TodoModalEditProps, addTodoFormikT } from '~shared/types/todo.type';

import { Formik, Form, FormikHelpers } from 'formik';
import { todoValidationSchema } from '~shared/yup.schemas/yup.schemas';
import {
	container,
	descriptionInput,
	inputContainer,
	radioInput,
	titleInput,
} from './todo-modal-edit.styled';
import { Button } from '@blueprintjs/core';
import { TextareaField } from '~shared/components/text-area-field/text-area-field';
import { RadioInputGroup } from '~shared/components/radio-input-group/radio-input-group';

const TodoModalEdit = ({
	todo,
	onSaveClick,
}: TodoModalEditProps): React.ReactNode => {
	const initialValues = useMemo(
		() => ({
			title: todo?.title || '',
			description: todo?.description || '',
			visibility: todo?.isPrivate ? 'private' : 'public',
		}),
		[todo],
	);

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
		<div className={container}>
			<Formik
				initialValues={initialValues}
				validationSchema={todoValidationSchema}
				onSubmit={handleSubmit}
			>
				{({ errors, touched }) => (
					<Form>
						<div className={inputContainer}>
							<TextareaField
								className={titleInput}
								name="title"
								placeholder="Type your todo title"
								errors={errors}
								touched={touched}
							/>
						</div>

						<div className={inputContainer}>
							<TextareaField
								className={descriptionInput}
								name="description"
								placeholder="Type your todo description"
								errors={errors}
								touched={touched}
							/>
						</div>

						<RadioInputGroup
							className={radioInput}
							name="visibility"
							options={[
								{ label: 'Public', value: 'public' },
								{ label: 'Private', value: 'private' },
							]}
						/>

						<Button type="submit">Save</Button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default TodoModalEdit;
