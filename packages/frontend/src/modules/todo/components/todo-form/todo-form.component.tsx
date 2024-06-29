import React, { useMemo } from 'react';
import { TodoFormProps, addTodoFormikT } from '~shared/types/todo.type';

import { Formik, Form, FormikHelpers } from 'formik';

import {
	container,
	descriptionInput,
	inputContainer,
	radioInput,
	titleInput,
} from './todo-form.styled';
import { Button } from '@blueprintjs/core';
import { TextareaField } from '~shared/components/text-area-field/text-area-field.component';
import { RadioInputGroup } from '~shared/components/radio-input-group/radio-input-group.component';
import { todoValidationSchema } from '~shared/yup.schemas/todo-yup.schemas';
import { useUserStore } from '~store/user.store';
import { Notify } from 'notiflix';

const TodoForm = ({ todo, onSaveClick }: TodoFormProps): JSX.Element => {
	const userStore = useUserStore();

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
			...(todo ? {} : { userId: userStore.user.id }),
		};

		if (todo) {
			onSaveClick(newTodo, todo.id);
		} else {
			onSaveClick(newTodo);
		}

		Notify.success('Todo has been saved');

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

export default TodoForm;
