import React, { useState } from 'react';
import { TodoPropsT } from '~shared/types/todo.type';
import { useTodoStore } from '~store/todo.store';
import { getToggleButtonStyle } from './desktop-todo-item.styled';
import { TodoModal } from '../todo-modal/todo-modal';

const DesktopTodoItem = ({ todo }: TodoPropsT): React.ReactNode => {
	const todoStore = useTodoStore();

	const [isModalOpen, setIsModalOpen] = useState(false);

	const onDeleteClick = (): void => {
		todoStore.deleteTodo(todo.id);
	};

	const onCompletedToggle = (): void => {
		todoStore.updateTodo(todo.id, { isCompleted: !todo.isCompleted });
	};

	const toggleButtonStyle = getToggleButtonStyle(todo.isCompleted);

	const openModal = (): void => {
		setIsModalOpen(true);
	};

	const closeModal = (): void => {
		setIsModalOpen(false);
	};

	return (
		<>
			<h2>{todo.title}</h2>
			<p>{todo.description}</p>
			<>
				<button onClick={openModal}>View</button>
				<button onClick={onDeleteClick}>Delete</button>
				<button
					className={toggleButtonStyle}
					onClick={onCompletedToggle}
				>
					Completed
				</button>
			</>

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
