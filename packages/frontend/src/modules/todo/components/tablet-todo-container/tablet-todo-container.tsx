import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import { TodosPropsT } from '~shared/types/todo.type';

import { buttonStyled, container } from './tablet-todo-container.styled';
import TabletTodoItem from '../tablet-todo-item/tablet-todo-item';
import { Button } from '@blueprintjs/core';
import { AddTodoModal } from '../add-todo-modal/add-todo-modal';

const TabletTodoContainer = ({ todos }: TodosPropsT): React.ReactNode => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = (): void => {
		setIsModalOpen(true);
	};

	const closeModal = (): void => {
		setIsModalOpen(false);
	};

	return (
		<div className={container}>
			<Button className={buttonStyled} onClick={openModal}>
				Add todo
			</Button>

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

			<AddTodoModal isModalOpen={isModalOpen} closeModal={closeModal} />
		</div>
	);
};

export default TabletTodoContainer;
