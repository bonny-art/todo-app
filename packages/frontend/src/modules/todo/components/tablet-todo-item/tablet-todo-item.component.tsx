import React, { useState } from 'react';
import { TodoPropsT, addTodoT } from '~shared/types/todo.type';
import { useTodoStore } from '~store/todo.store';

import { Button, Card, Switch } from '@blueprintjs/core';
import {
	button,
	buttonsContainer,
	cardContainer,
	cardStyled,
	controlsContainer,
	descriptionStyled,
	switchStyled,
	titleStyled,
} from './tablet-todo-item.styled';
import { Modal } from '~shared/components/modal/modal';
import TodoForm from '../todo-form/todo-form.component';
import TodoCard from '../todo-card/todo-card.component';
import { useUserStore } from '~store/user.store';

const TabletTodoItem = ({ todo }: TodoPropsT): JSX.Element => {
	const todoStore = useTodoStore();
	const userStore = useUserStore();

	const isUpdatable = todo.userId === userStore.user.id;

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
				<Card className={`${cardStyled} bp5-elevation-2`}>
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
							className={`bp5-align-right switch ${switchStyled}`}
							labelElement={'Complete'}
							checked={todo.isCompleted}
							disabled={!isUpdatable}
						></Switch>
					</div>
				</Card>
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
