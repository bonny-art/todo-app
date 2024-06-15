import React from 'react';
import { TodoModalShowProps } from '~shared/types/todo.type';

const TodoModalShow = ({
	todo,
	onUpdateClick,
}: TodoModalShowProps): React.ReactNode => {
	return (
		<div>
			<h2>{todo.title}</h2>
			<p>{todo.description}</p>

			<button onClick={onUpdateClick}>Update</button>
		</div>
	);
};

export default TodoModalShow;
