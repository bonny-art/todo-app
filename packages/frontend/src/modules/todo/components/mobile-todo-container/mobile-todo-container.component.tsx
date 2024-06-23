import React, { useState } from 'react';

import MobileTodoItem from '../mobile-todo-item/mobile-todo-item.component';
import {
	addTodoButton,
	listStyled,
	todosContainerStyled,
} from './mobile-todo-container.styled';
import { Button } from '@blueprintjs/core';
import { Modal } from '~shared/components/modal/modal';
import TodoForm from '../todo-form/todo-form.component';
import { useTodoStore } from '~store/todo.store';
import { SearchFilter } from '../search-filter/search-filter.component';
import { OptionFilter } from '../option-filter/option-filter.component';

import { MobileTodosPropsT, addTodoT } from '~shared/types/todo.type';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';

const MobileTodoContainer = ({
	todos,
	currentPage,
	totalPages,
	incrementPage,
}: MobileTodosPropsT): JSX.Element => {
	const todoStore = useTodoStore();

	useBottomScrollListener(() => {
		if (currentPage >= totalPages) {
			return;
		}
		incrementPage();
	});

	const [isModalOpen, setIsModalOpen] = useState(false);

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
			<SearchFilter />
			<OptionFilter />

			{todos.length ? (
				<ul className={listStyled}>
					{todos.map((todo) => (
						<MobileTodoItem key={todo.id} todo={todo} />
					))}
				</ul>
			) : (
				<p>Ups! No todos. Add the first!</p>
			)}

			{isModalOpen && (
				<Modal closeModal={closeModal}>
					<TodoForm onSaveClick={handleSaveClick} />
				</Modal>
			)}
		</div>
	);
};

export default MobileTodoContainer;
