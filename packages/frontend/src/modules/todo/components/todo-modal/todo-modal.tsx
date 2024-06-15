import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { ModalContainer } from '~shared/components/modal-container/modal-container';
import { TodoModalProps, addTodoT } from '~shared/types/todo.type';

import TodoModalShow from '../todo-modal-show/todo-modal-show';
import TodoModalEdit from '../todo-modal-edit/todo-modal-edit';
import { modalStyled } from './todo-modal.styled';

import { useTodoStore } from '~store/todo.store';

export const TodoModal = ({
	isModalOpen,
	closeModal,
	todo,
}: TodoModalProps): React.ReactNode => {
	const todoStore = useTodoStore();
	const [isEdited, setIsEdited] = useState(false);

	const handleUpdateClick = (): void => {
		setIsEdited(true);
	};

	const handleSaveClick = (values: addTodoT, id: number): void => {
		todoStore.updateTodo(id, values);
		setIsEdited(false);
	};

	return (
		<>
			{isModalOpen
				? ReactDOM.createPortal(
						<ModalContainer onClose={closeModal}>
							<div className={modalStyled}>
								<button onClick={closeModal}>
									<p>close icon</p>
								</button>

								{isEdited ? (
									<TodoModalEdit
										todo={todo}
										onSaveClick={handleSaveClick}
									/>
								) : (
									<TodoModalShow
										todo={todo}
										onUpdateClick={handleUpdateClick}
									/>
								)}
							</div>
						</ModalContainer>,
						document.getElementById('modal-root'),
					)
				: null}
		</>
	);
};
