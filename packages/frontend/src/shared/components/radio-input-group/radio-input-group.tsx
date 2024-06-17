import React from 'react';

import { RadioInputGroupProps } from '~shared/types/todo.type';
import { RadioField } from '../radio-field/radio-field';

export const RadioInputGroup = ({
	name,
	options,
	className,
}: RadioInputGroupProps): React.ReactNode => (
	<div className={className} role="group" aria-labelledby="my-radio-group">
		{options.map((option) => (
			<RadioField
				key={option.value}
				name={name}
				value={option.value}
				label={option.label}
			/>
		))}
	</div>
);
