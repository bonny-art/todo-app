import { Button } from '@blueprintjs/core';
import { Form, Formik, FormikHelpers } from 'formik';
import React from 'react';
import { InputField } from '~shared/components/input-field/input-field';
import { queryFormikT } from '~shared/types/todo.type';

import { seqrchQueryValidationSchema } from '~shared/yup.schemas/todo-yup.schemas';
import { useTodoStore } from '~store/todo.store';
import {
	container,
	input,
	inputContainer,
	searchFormStyled,
} from './search-filter.styled';
import { IoMdSearch } from 'react-icons/io';

export const SearchFilter = (): JSX.Element => {
	const todoStore = useTodoStore();

	const initialValues = {
		searchQuery: '',
	};

	const handleSubmit = (
		values: queryFormikT,
		actions: FormikHelpers<queryFormikT>,
	): void => {
		todoStore.setQuery({
			searchQuery: values.searchQuery.trim() || null,
		});

		actions.setSubmitting(false);
	};

	return (
		<div className={container}>
			<Formik
				initialValues={initialValues}
				validationSchema={seqrchQueryValidationSchema}
				onSubmit={handleSubmit}
			>
				{({ errors, touched }) => (
					<Form>
						<div className={searchFormStyled}>
							<div className={inputContainer}>
								<InputField
									className={input}
									name="searchQuery"
									placeholder="Search todos"
									errors={errors}
									touched={touched}
								/>
							</div>

							<Button type="submit">
								<IoMdSearch />
							</Button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};
