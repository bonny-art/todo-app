import React, { useState } from 'react';
import { TodoPropsT, addTodoT } from '~shared/types/todo.type';
import { useTodoStore } from '~store/todo.store';

import { Button, Card, Elevation, Switch } from '@blueprintjs/core';
import {
	buttonsContainer,
	cardStyled,
	controlsContainer,
} from './mobile-todo-item.styled';
import { Modal } from '~shared/components/modal/modal';
import TodoForm from '../todo-form/todo-form';
import TodoCard from '../todo-card/todo-card';

const MobileTodoItem = ({ todo }: TodoPropsT): JSX.Element => {
	const todoStore = useTodoStore();

	const isEdited = todoStore.isEdited;

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
		todoStore.setIsEditedFalse();
	};

	const handleSaveClick = (values: addTodoT, id: number): void => {
		todoStore.updateTodo(id, values);
		todoStore.setIsEditedFalse();
	};

	const handleUpdateClick = (): void => {
		todoStore.setIsEditedTrue();
	};

	return (
		<>
			<Card
				className={cardStyled}
				interactive={true}
				elevation={Elevation.TWO}
			>
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
						labelElement={'Complete'}
						checked={todo.isCompleted}
						style={{ marginBottom: '0' }}
					></Switch>
				</div>
			</Card>

			{isModalOpen && (
				<Modal closeModal={closeModal}>
					{isEdited ? (
						<TodoForm todo={todo} onSaveClick={handleSaveClick} />
					) : (
						<TodoCard
							todo={todo}
							onUpdateClick={handleUpdateClick}
						/>
					)}
				</Modal>
			)}
		</>
	);
};

export default MobileTodoItem;

// segmented - control;
