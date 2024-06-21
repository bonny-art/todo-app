import React, { useState } from 'react';
import { TodosPropsT, addTodoT } from '~shared/types/todo.type';
import DesktopTodoItem from '../desktop-todo-item/desktop-todo-item.component';
import { Button } from '@blueprintjs/core';
import {
	addTodoButton,
	tableStyle,
	todosContainerStyled,
} from './desktop-todo-container.styled';
import { Modal } from '~shared/components/modal/modal';
import TodoForm from '../todo-form/todo-form.component';
import { useTodoStore } from '~store/todo.store';
import { SearchFilter } from '../search-filter/search-filter.component';
import { OptionFilter } from '../option-filter/option-filter.component';

const DesktopTodoContainer = ({ todos }: TodosPropsT): JSX.Element => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const todoStore = useTodoStore();

	const openModal = (): void => {
		setIsModalOpen(true);
	};

	const closeModal = (): void => {
		setIsModalOpen(false);
	};

	const handleSaveClick = (values: addTodoT): void => {
		todoStore.addTodo(values);
		closeModal();
	};

	return (
		<div className={todosContainerStyled}>
			<Button className={addTodoButton} onClick={openModal}>
				Add todo
			</Button>

			<div className="options">
				<OptionFilter />
				<SearchFilter />
			</div>

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

			{isModalOpen && (
				<Modal closeModal={closeModal}>
					<TodoForm onSaveClick={handleSaveClick} />
				</Modal>
			)}
		</div>
	);
};

export default DesktopTodoContainer;
