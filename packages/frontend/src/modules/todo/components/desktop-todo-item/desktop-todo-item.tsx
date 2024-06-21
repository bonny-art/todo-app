import React, { useState } from 'react';
import { TodoPropsT, addTodoT } from '~shared/types/todo.type';
import { useTodoStore } from '~store/todo.store';

import { Button, Switch } from '@blueprintjs/core';
import { Modal } from '~shared/components/modal/modal';
import TodoForm from '../todo-form/todo-form';
import TodoCard from '../todo-card/todo-card';

const DesktopTodoItem = ({ todo }: TodoPropsT): JSX.Element => {
	const todoStore = useTodoStore();

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
				<td className="description-cell">{todo.description}</td>
				<td className="actions-cell">
					<Button className="button" onClick={openModal}>
						View
					</Button>
					<Button className="button" onClick={onDeleteClick}>
						Delete
					</Button>
					<Switch
						onChange={onSwitchToggle}
						className="bp5-align-right switch"
						labelElement={'Complete'}
						checked={todo.isCompleted}
						style={{ marginBottom: '0' }}
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
