import React from 'react';
import { TodoModalShowProps } from '~shared/types/todo.type';
import { container, switchStyled } from './todo-card.styled';
import { Button, Switch } from '@blueprintjs/core';
import { useTodoStore } from '~store/todo.store';
import { useUserStore } from '~store/user.store';

const TodoCard = ({ todo, onUpdateClick }: TodoModalShowProps): JSX.Element => {
	const todoStore = useTodoStore();
	const userStore = useUserStore();

	const isUpdatable = todo.userId === userStore.user.id;

	const onToggleComplete = (): void => {
		todoStore.updateTodo(todo.id, { isCompleted: !todo.isCompleted });
	};

	const onTogglePrivate = (): void => {
		todoStore.updateTodo(todo.id, { isPrivate: !todo.isPrivate });
	};

	return (
		<div className={container}>
			<h2>{todo.title}</h2>
			<p>{todo.description}</p>

			<Switch
				onChange={onToggleComplete}
				className={`bp5-align-right switch ${switchStyled}`}
				labelElement={'Complete'}
				checked={todo.isCompleted}
				disabled={!isUpdatable}
			></Switch>

			<Switch
				onChange={onTogglePrivate}
				className={`bp5-align-right switch ${switchStyled}`}
				labelElement={'Private'}
				checked={todo.isPrivate}
				disabled={!isUpdatable}
			></Switch>

			{isUpdatable && <Button onClick={onUpdateClick}>Update</Button>}
		</div>
	);
};

export default TodoCard;
