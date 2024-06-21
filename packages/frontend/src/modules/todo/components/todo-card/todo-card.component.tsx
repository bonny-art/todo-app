import React from 'react';
import { TodoModalShowProps } from '~shared/types/todo.type';
import { container } from './todo-card.styled';
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
				className="bp5-align-right switch"
				labelElement={'Complete'}
				checked={todo.isCompleted}
				// style={{ marginBottom: '10px' }}
			></Switch>

			<Switch
				onChange={onTogglePrivate}
				className="bp5-align-right switch"
				labelElement={'Private'}
				checked={todo.isPrivate}
				// style={{ marginBottom: '0' }}
			></Switch>

			{isUpdatable && <Button onClick={onUpdateClick}>Update</Button>}
		</div>
	);
};

export default TodoCard;
