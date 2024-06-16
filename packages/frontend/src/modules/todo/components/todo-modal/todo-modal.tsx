import React from 'react';
import ReactDOM from 'react-dom';

import { ModalContainer } from '~shared/components/modal-container/modal-container';
import { TodoModalProps, addTodoT } from '~shared/types/todo.type';

import TodoModalShow from '../todo-modal-show/todo-modal-show';
import TodoModalEdit from '../todo-modal-edit/todo-modal-edit';
import { closeButton, modalStyled } from './todo-modal.styled';

import { useTodoStore } from '~store/todo.store';
import { IoClose } from 'react-icons/io5';

export const TodoModal = ({
	isModalOpen,
	closeModal,
	todo,
}: TodoModalProps): React.ReactNode => {
	const todoStore = useTodoStore();
	const isEdited = todoStore.isEdited;

	const handleUpdateClick = (): void => {
		todoStore.setIsEditedTrue();
	};

	const handleSaveClick = (values: addTodoT, id: number): void => {
		todoStore.updateTodo(id, values);
		todoStore.setIsEditedFalse();
	};

	return (
		<>
			{isModalOpen
				? ReactDOM.createPortal(
						<ModalContainer onClose={closeModal}>
							<div className={modalStyled}>
								<button
									className={closeButton}
									onClick={closeModal}
								>
									<IoClose />
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
