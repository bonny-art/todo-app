import React from 'react';

import { ModalContainer } from '~shared/components/modal-container/modal-container';

import TodoModalEdit from '../todo-modal-edit/todo-modal-edit';
import { modalStyled } from './add-todo-modal.styled';
import { addTodoT } from '~shared/types/todo.type';
import { useTodoStore } from '~store/todo.store';

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
						<button onClick={closeModal}>
							<p>close icon</p>
						</button>

						<TodoModalEdit onSaveClick={handleSaveClick} />
					</div>
				</ModalContainer>
			)}
		</>
	);
};
