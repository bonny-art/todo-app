import React, { useState } from 'react';
import { TodosPropsT } from '~shared/types/todo.type';
import DesktopTodoItem from '../desktop-todo-item/desktop-todo-item';
import { AddTodoModal } from '../add-todo-modal/add-todo-modal';
import { Button } from '@blueprintjs/core';
import {
	addTodoButton,
	tableStyle,
	todosContainerStyled,
} from './desktop-todo-container.styled';

const DesktopTodoContainer = ({ todos }: TodosPropsT): React.ReactNode => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = (): void => {
		setIsModalOpen(true);
	};

	const closeModal = (): void => {
		setIsModalOpen(false);
	};

	return (
		<div className={todosContainerStyled}>
			<Button className={addTodoButton} onClick={openModal}>
				Add todo
			</Button>

			<table className={tableStyle}>
				<thead>
					<tr>
						<th>Todo Title</th>
						<th>Description</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{todos.map((todo) => (
						<DesktopTodoItem key={todo.id} todo={todo} />
					))}
				</tbody>
			</table>

			<AddTodoModal isModalOpen={isModalOpen} closeModal={closeModal} />
		</div>
	);
};

export default DesktopTodoContainer;
