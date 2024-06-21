import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import { useTodoStore } from '~store/todo.store';
import MobileTodoContainer from './components/mobile-todo-container/mobile-todo-container';
import TabletTodoContainer from './components/tablet-todo-container/tablet-todo-container';
import DesktopTodoContainer from './components/desktop-todo-container/desktop-todo-container';

const TodoPage = (): JSX.Element => {
	const todos = useTodoStore((state) => state.todos);

	const todoStore = useTodoStore();

	const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
	const isTablet = useMediaQuery({
		query: '(min-width: 768px) and (max-width: 1439px)',
	});
	const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

	useEffect(() => {
		todoStore.getAllTodos();
	}, []);

	return (
		<>
			{isMobile && <MobileTodoContainer todos={todos} />}
			{isTablet && <TabletTodoContainer todos={todos} />}
			{isDesktop && <DesktopTodoContainer todos={todos} />}
		</>
	);
};

export default TodoPage;
