import { Field } from 'formik';
import React from 'react';
import { FieldProps } from '~shared/types/todo.type';

export const InputField = ({
	className,
	name,
	placeholder,
	errors,
	touched,
}: FieldProps): React.ReactNode => (
	<>
		<Field
			className={className}
			as="input"
			name={name}
			placeholder={placeholder}
		/>
		{touched[name] && errors[name] && (
			<div className="error-styled">{errors[name]}</div>
		)}
	</>
);
