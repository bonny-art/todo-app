import React from 'react';
import { Field } from 'formik';
import { RadioFieldProps } from '~shared/types/todo.type';

export const RadioField = ({
	name,
	value,
	label,
}: RadioFieldProps): JSX.Element => (
	<label>
		<Field type="radio" name={name} value={value} />
		{label}
	</label>
);
