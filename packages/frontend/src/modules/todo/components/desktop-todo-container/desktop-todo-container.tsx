import React, { useState } from 'react';
import { TodosPropsT } from '~shared/types/todo.type';
import DesktopTodoItem from '../desktop-todo-item/desktop-todo-item';
import { AddTodoModal } from '../add-todo-modal/add-todo-modal';

const DesktopTodoContainer = ({ todos }: TodosPropsT): React.ReactNode => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = (): void => {
		setIsModalOpen(true);
	};

	const closeModal = (): void => {
		setIsModalOpen(false);
	};

	return (
		<>
			<div>DesktopTodoContainer</div>
			<button onClick={openModal}>Add todo</button>
			{todos.map((todo) => (
				<DesktopTodoItem key={todo.id} todo={todo} />
			))}

			<AddTodoModal isModalOpen={isModalOpen} closeModal={closeModal} />
		</>
	);
};

export default DesktopTodoContainer;
