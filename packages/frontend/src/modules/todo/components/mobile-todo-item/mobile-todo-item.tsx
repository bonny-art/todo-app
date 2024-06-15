import React, { useState } from 'react';
import { TodoPropsT } from '~shared/types/todo.type';
import { useTodoStore } from '~store/todo.store';

import { TodoModal } from '../todo-modal/todo-modal';
import { Button, Card, Elevation, Switch } from '@blueprintjs/core';
import { buttonsContainer, controlsContainer } from './mobile-todo-item.styled';

const MobileTodoItem = ({ todo }: TodoPropsT): React.ReactNode => {
	const todoStore = useTodoStore();

	const [isModalOpen, setIsModalOpen] = useState(false);

	const onDeleteClick = (): void => {
		todoStore.deleteTodo(todo.id);
	};

	const onSwitchToggle = (): void => {
		todoStore.updateTodo(todo.id, { isCompleted: !todo.isCompleted });
	};

	const openModal = (): void => {
		setIsModalOpen(true);
	};

	const closeModal = (): void => {
		setIsModalOpen(false);
	};

	return (
		<>
			<Card interactive={true} elevation={Elevation.TWO}>
				<h5>{todo.title}</h5>
				<p>{todo.description}</p>
				<div className={controlsContainer}>
					<div className={buttonsContainer}>
						<Button onClick={openModal}>View</Button>
						<Button onClick={onDeleteClick}>Delete</Button>
					</div>

					<Switch
						onChange={onSwitchToggle}
						className="bp5-align-right"
						labelElement={'Mark done'}
						checked={todo.isCompleted}
						style={{ marginBottom: '0' }}
					></Switch>
				</div>
			</Card>

			<TodoModal
				isModalOpen={isModalOpen}
				closeModal={closeModal}
				todo={todo}
			/>
		</>
	);
};

export default MobileTodoItem;

// segmented - control;
