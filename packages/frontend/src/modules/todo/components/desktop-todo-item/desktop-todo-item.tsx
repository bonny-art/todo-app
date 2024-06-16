import React, { useState } from 'react';
import { TodoPropsT } from '~shared/types/todo.type';
import { useTodoStore } from '~store/todo.store';

import { TodoModal } from '../todo-modal/todo-modal';
import { Button, Switch } from '@blueprintjs/core';

const DesktopTodoItem = ({ todo }: TodoPropsT): React.ReactNode => {
	const todoStore = useTodoStore();

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
			<TodoModal
				isModalOpen={isModalOpen}
				closeModal={closeModal}
				todo={todo}
			/>
		</>
	);
};

export default DesktopTodoItem;

// segmented - control;
