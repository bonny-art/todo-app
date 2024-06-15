import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import { TodosPropsT } from '~shared/types/todo.type';

import { container } from './tablet-todo-container.styled';
import TabletTodoItem from '../tablet-todo-item/tablet-todo-item';

const TabletTodoContainer = ({ todos }: TodosPropsT): React.ReactNode => {
	console.log('todos in TabletTodoContainer:>> ', todos);
	return (
		<div className={container}>
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
	);
};

export default TabletTodoContainer;
