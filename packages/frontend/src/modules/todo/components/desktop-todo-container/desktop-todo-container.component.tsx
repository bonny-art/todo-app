import React, { useState } from 'react';
import { DesktopTodosPropsT, addTodoT } from '~shared/types/todo.type';
import DesktopTodoItem from '../desktop-todo-item/desktop-todo-item.component';
import { Button } from '@blueprintjs/core';
import {
	MyPaginate,
	addTodoButton,
	noTodosStyled,
	tableStyle,
	todosContainerStyled,
} from './desktop-todo-container.styled';
import { Modal } from '~shared/components/modal/modal';
import TodoForm from '../todo-form/todo-form.component';
import { useTodoStore } from '~store/todo.store';
import { SearchFilter } from '../search-filter/search-filter.component';
import { OptionFilter } from '../option-filter/option-filter.component';
import ReactPaginate from 'react-paginate';

const DesktopTodoContainer = ({
	todos,
	totalPages,
}: DesktopTodosPropsT): JSX.Element => {
	const todoStore = useTodoStore();

	const handlePageClick = (event: { selected: number }): void => {
		todoStore.setCurrentPage(event.selected + 1);
		todoStore.setQuery({ page: event.selected + 1 });
	};

	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = (): void => {
		setIsModalOpen(true);
	};

	const closeModal = (): void => {
		setIsModalOpen(false);
	};

	const handleSaveClick = (values: addTodoT): void => {
		todoStore.addTodo(values);
		closeModal();
	};

	return (
		<div className={todosContainerStyled}>
			<Button className={addTodoButton} onClick={openModal}>
				Add todo
			</Button>

			<div className="options">
				<OptionFilter />
				<SearchFilter />
			</div>
			{todos.length ? (
				<>
					<table className={tableStyle}>
						<thead>
							<tr>
								<th>Todo Title</th>
								<th>Description</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{todos.map((todo) => (
								<DesktopTodoItem key={todo.id} todo={todo} />
							))}
						</tbody>
					</table>

					<ReactPaginate
						className={MyPaginate}
						breakLabel="..."
						nextLabel="next >"
						onPageChange={handlePageClick}
						pageRangeDisplayed={3}
						pageCount={totalPages}
						previousLabel="< previous"
						renderOnZeroPageCount={null}
					/>
				</>
			) : (
				<p className={noTodosStyled}>No todos for such filters.</p>
			)}

			{isModalOpen && (
				<Modal closeModal={closeModal}>
					<TodoForm onSaveClick={handleSaveClick} />
				</Modal>
			)}
		</div>
	);
};

export default DesktopTodoContainer;
