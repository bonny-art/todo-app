import React, { useState } from 'react';
import { TodoPropsT, addTodoT } from '~shared/types/todo.type';
import { useTodoStore } from '~store/todo.store';

import { Button, Switch } from '@blueprintjs/core';
import {
	button,
	buttonsContainer,
	cardContainer,
	cardStyled,
	controlsContainer,
	descriptionStyled,
	titleStyled,
} from './tablet-todo-item.styled';
import { Modal } from '~shared/components/modal/modal';
import TodoForm from '../todo-form/todo-form';
import TodoCard from '../todo-card/todo-card';

const TabletTodoItem = ({ todo }: TodoPropsT): JSX.Element => {
	const todoStore = useTodoStore();

	const [isModalOpen, setIsModalOpen] = useState(false);
	const isEdited = todoStore.isEdited;

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
			<div className={cardContainer}>
				<div className={cardStyled}>
					<h5 className={titleStyled}>{todo.title}</h5>
					<p className={descriptionStyled}>{todo.description}</p>
					<div className={controlsContainer}>
						<div className={buttonsContainer}>
							<Button className={button} onClick={openModal}>
								View
							</Button>
							<Button className={button} onClick={onDeleteClick}>
								Delete
							</Button>
						</div>

						<Switch
							onChange={onSwitchToggle}
							className="bp5-align-right switch"
							labelElement={'Complete'}
							checked={todo.isCompleted}
						></Switch>
					</div>
				</div>
			</div>

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

export default TabletTodoItem;
