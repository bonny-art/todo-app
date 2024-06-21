import { Button } from '@blueprintjs/core';
import React, { useState } from 'react';
import { useTodoStore } from '~store/todo.store';
import { container } from './option-filter.styled';

export const OptionFilter = (): JSX.Element => {
	const [group1ActiveButton, setGroup1ActiveButton] = useState('All');
	const [group2ActiveButton, setGroup2ActiveButton] = useState(false);

	const todoStore = useTodoStore();

	const handlePrivateStatusClick = (buttonName): void => {
		if (group1ActiveButton !== buttonName) {
			setGroup1ActiveButton(buttonName);

			const isPrivate =
				buttonName === 'Private'
					? true
					: buttonName === 'Public'
						? false
						: undefined;

			todoStore.setQuery({ isPrivate });
		}
	};

	const handleCompletedStatusClick = (): void => {
		setGroup2ActiveButton(!group2ActiveButton);
		const newIsCompleted = group2ActiveButton ? undefined : true;
		todoStore.setQuery({ isCompleted: newIsCompleted });
	};

	return (
		<div className={container}>
			<Button
				onClick={() => handlePrivateStatusClick('All')}
				className={group1ActiveButton === 'All' ? 'active' : ''}
			>
				All
			</Button>
			<Button
				onClick={() => handlePrivateStatusClick('Private')}
				className={group1ActiveButton === 'Private' ? 'active' : ''}
			>
				Private
			</Button>
			<Button
				onClick={() => handlePrivateStatusClick('Public')}
				className={group1ActiveButton === 'Public' ? 'active' : ''}
			>
				Public
			</Button>

			<Button
				onClick={handleCompletedStatusClick}
				className={group2ActiveButton ? 'active' : ''}
			>
				Completed
			</Button>
		</div>
	);
};
