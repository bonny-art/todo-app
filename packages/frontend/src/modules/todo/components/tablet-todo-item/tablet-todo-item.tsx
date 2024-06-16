import React, { useState } from 'react';
import { TodoPropsT } from '~shared/types/todo.type';
import { useTodoStore } from '~store/todo.store';

import { TodoModal } from '../todo-modal/todo-modal';
import { Button, Switch } from '@blueprintjs/core';
import {
	button,
	buttonsContainer,
	cardContainer,
	cardStyled,
	controlsContainer,
	descriptionStyled,
	titleStyled,
} from './tablet-todo-item.styled';

const TabletTodoItem = ({ todo }: TodoPropsT): React.ReactNode => {
	console.log('🚀 ~ todo:', todo);
	const todoStore = useTodoStore();

	const [isModalOpen, setIsModalOpen] = useState(false);
	console.log('🚀 ~ isModalOpen:', isModalOpen);

	const onDeleteClick = (): void => {
		todoStore.deleteTodo(todo.id);
	};

	const onSwitchToggle = (): void => {
		todoStore.updateTodo(todo.id, { isCompleted: !todo.isCompleted });
	};

	const openModal = (): void => {
		setIsModalOpen(true);
	};

	const closeModal = (): void => {
		setIsModalOpen(false);
		todoStore.setIsEditedFalse();
	};

	return (
		<>
			<div className={cardContainer}>
				<div className={cardStyled}>
					<h5 className={titleStyled}>{todo.title}</h5>
					<p className={descriptionStyled}>{todo.description}</p>
					<div className={controlsContainer}>
						<div className={buttonsContainer}>
							<Button className={button} onClick={openModal}>
								View
							</Button>
							<Button className={button} onClick={onDeleteClick}>
								Delete
							</Button>
						</div>

						<Switch
							onChange={onSwitchToggle}
							className="bp5-align-right switch"
							labelElement={'Complete'}
							checked={todo.isCompleted}
						></Switch>
					</div>
				</div>
			</div>

			<TodoModal
				isModalOpen={isModalOpen}
				closeModal={closeModal}
				todo={todo}
			/>
		</>
	);
};

export default TabletTodoItem;
