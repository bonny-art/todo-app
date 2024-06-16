import React from 'react';

import { ModalContainer } from '~shared/components/modal-container/modal-container';

import TodoModalEdit from '../todo-modal-edit/todo-modal-edit';
import { closeButton, modalStyled } from './add-todo-modal.styled';
import { addTodoT } from '~shared/types/todo.type';
import { useTodoStore } from '~store/todo.store';
import { IoClose } from 'react-icons/io5';

export const AddTodoModal = ({ isModalOpen, closeModal }): React.ReactNode => {
	const todoStore = useTodoStore();

	const handleSaveClick = (values: addTodoT): void => {
		todoStore.addTodo(values);
		closeModal();
	};

	return (
		<>
			{isModalOpen && (
				<ModalContainer onClose={closeModal}>
					<div className={modalStyled}>
						<button className={closeButton} onClick={closeModal}>
							<IoClose />
						</button>

						<TodoModalEdit onSaveClick={handleSaveClick} />
					</div>
				</ModalContainer>
			)}
		</>
	);
};
