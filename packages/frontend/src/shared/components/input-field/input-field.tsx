import { Field } from 'formik';
import React from 'react';
import { FieldProps } from '~shared/types/todo.type';

export const InputField = ({
	type = 'text',
	className,
	name,
	placeholder,
	errors,
	touched,
}: FieldProps): JSX.Element => (
	<>
		<Field
			className={className}
			type={type}
			as="input"
			name={name}
			placeholder={placeholder}
		/>
		{touched[name] && errors[name] && (
			<div className="error-styled">{errors[name]}</div>
		)}
	</>
);
