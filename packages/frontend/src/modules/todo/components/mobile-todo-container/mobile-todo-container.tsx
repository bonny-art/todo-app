import React, { useState } from 'react';
import { TodosPropsT } from '~shared/types/todo.type';

import { AddTodoModal } from '../add-todo-modal/add-todo-modal';
import MobileTodoItem from '../mobile-todo-item/mobile-todo-item';
import {
	listStyled,
	todosContainerStyled,
} from './mobile-todo-container.styled';
import { Button } from '@blueprintjs/core';

const MobileTodoContainer = ({ todos }: TodosPropsT): React.ReactNode => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = (): void => {
		setIsModalOpen(true);
	};

	const closeModal = (): void => {
		setIsModalOpen(false);
	};

	return (
		<div className={todosContainerStyled}>
			<Button onClick={openModal}>Add todo</Button>
			<div className={listStyled}>
				{todos.map((todo) => (
					<MobileTodoItem key={todo.id} todo={todo} />
				))}
			</div>

			<AddTodoModal isModalOpen={isModalOpen} closeModal={closeModal} />
		</div>
	);
};

export default MobileTodoContainer;
