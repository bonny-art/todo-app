import React, { useState } from 'react';
import { TodoPropsT, addTodoT } from '~shared/types/todo.type';
import { useTodoStore } from '~store/todo.store';

import { Button, Switch } from '@blueprintjs/core';
import { Modal } from '~shared/components/modal/modal';
import TodoForm from '../todo-form/todo-form.component';
import TodoCard from '../todo-card/todo-card.component';
import { controlsContainer, switchStyled } from './desktop-todo-item.styled';
import { useUserStore } from '~store/user.store';

const DesktopTodoItem = ({ todo }: TodoPropsT): JSX.Element => {
	const todoStore = useTodoStore();
	const userStore = useUserStore();

	const isUpdatable = todo.userId === userStore.user.id;

	const isEdited = todoStore.isEdited;

	const [isModalOpen, setIsModalOpen] = useState(false);

	const onDeleteClick = (): void => {
		todoStore.deleteTodo(todo.id);
	};

	const openModal = (): void => {
		setIsModalOpen(true);
	};

	const closeModal = (): void => {
		setIsModalOpen(false);
	};

	const onSwitchToggle = (): void => {
		todoStore.updateTodo(todo.id, { isCompleted: !todo.isCompleted });
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
			<tr>
				<td className="title-cell">{todo.title}</td>
				<td className="description-cell">
					<div>{todo.description}</div>
				</td>
				<td className={`actions-cell ${controlsContainer}`}>
					<Button className="button" onClick={openModal}>
						View
					</Button>
					<Button className="button" onClick={onDeleteClick}>
						Delete
					</Button>
					<Switch
						onChange={onSwitchToggle}
						className={`bp5-align-right switch ${switchStyled}`}
						labelElement={'Complete'}
						checked={todo.isCompleted}
						style={{ marginBottom: '0' }}
						disabled={!isUpdatable}
					></Switch>
				</td>
			</tr>

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

export default DesktopTodoItem;

// segmented - control;
