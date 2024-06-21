import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import { TodosPropsT, addTodoT } from '~shared/types/todo.type';

import { buttonStyled, container } from './tablet-todo-container.styled';
import TabletTodoItem from '../tablet-todo-item/tablet-todo-item.component';
import { Button } from '@blueprintjs/core';

import { Modal } from '~shared/components/modal/modal';
import TodoForm from '../todo-form/todo-form.component';
import { useTodoStore } from '~store/todo.store';
import { SearchFilter } from '../search-filter/search-filter.component';
import { OptionFilter } from '../option-filter/option-filter.component';

const TabletTodoContainer = ({ todos }: TodosPropsT): JSX.Element => {
	const todoStore = useTodoStore();
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
		<div className={container}>
			<Button className={buttonStyled} onClick={openModal}>
				Add todo
			</Button>

			<div className="options">
				<OptionFilter />
				<SearchFilter />
			</div>

			<div>
				<Swiper
					pagination={true}
					modules={[Pagination]}
					className="mySwiper"
				>
					{todos.map((todo) => (
						<SwiperSlide key={todo.id}>
							<TabletTodoItem todo={todo} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			{isModalOpen && (
				<Modal closeModal={closeModal}>
					<TodoForm onSaveClick={handleSaveClick} />
				</Modal>
			)}
		</div>
	);
};

export default TabletTodoContainer;
