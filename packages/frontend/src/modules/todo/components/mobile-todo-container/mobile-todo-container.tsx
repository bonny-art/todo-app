import React, { useState } from 'react';
import { TodosPropsT, addTodoT } from '~shared/types/todo.type';

import MobileTodoItem from '../mobile-todo-item/mobile-todo-item';
import {
	listStyled,
	todosContainerStyled,
} from './mobile-todo-container.styled';
import { Button } from '@blueprintjs/core';
import { Modal } from '~shared/components/modal/modal';
import TodoForm from '../todo-form/todo-form';
import { useTodoStore } from '~store/todo.store';

const MobileTodoContainer = ({ todos }: TodosPropsT): JSX.Element => {
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
			<Button onClick={openModal}>Add todo</Button>
			<div className={listStyled}>
				{todos.map((todo) => (
					<MobileTodoItem key={todo.id} todo={todo} />
				))}
			</div>

			{isModalOpen && (
				<Modal closeModal={closeModal}>
					<TodoForm onSaveClick={handleSaveClick} />
				</Modal>
			)}
		</div>
	);
};

export default MobileTodoContainer;
