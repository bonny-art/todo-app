import React, { useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

import { queryInfoT, useTodoStore } from '~store/todo.store';
import MobileTodoContainer from './components/mobile-todo-container/mobile-todo-container.component';
import TabletTodoContainer from './components/tablet-todo-container/tablet-todo-container.component';
import DesktopTodoContainer from './components/desktop-todo-container/desktop-todo-container.component';
import { useSearchParams } from 'react-router-dom';
import {
	convertToBoolean,
	convertToSearchParams,
} from '~shared/helpers/type-converters';
import { ITEMS_PER_PAGE } from '~shared/constants/todos.constants';

const TodoPage = (): JSX.Element => {
	const [searchParams, setSearchParams] = useSearchParams();

	const todoStore = useTodoStore();
	const {
		todos,
		query,
		totalPages,
		currentPage,
		getTodos,
		getTodosAcc,
		clearTodos,
		setQuery,
	} = todoStore;
	const previousQuery = useRef<queryInfoT>();

	const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
	const isTablet = useMediaQuery({
		query: '(min-width: 768px) and (max-width: 1199px)',
	});
	const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });

	const hasQueryFilterChanged = (query: queryInfoT): boolean => {
		return (
			query.isCompleted !== previousQuery.current?.isCompleted ||
			query.isPrivate !== previousQuery.current?.isPrivate ||
			query.searchQuery !== previousQuery.current?.searchQuery
		);
	};

	useEffect(() => {
		const searchQuery = searchParams.get('searchQuery') || '';
		const isPrivate = convertToBoolean(searchParams.get('isPrivate'));
		const isCompleted = convertToBoolean(searchParams.get('isCompleted'));
		const page = Number(searchParams.get('page')) || 1;

		setQuery({
			searchQuery,
			isPrivate,
			isCompleted,
			perPage: ITEMS_PER_PAGE,
			page,
		});
	}, []);

	useEffect(() => {
		if (!query) {
			return;
		}

		if (hasQueryFilterChanged(query)) {
			clearTodos();
			const newQuery = { ...query, page: 1 };
			previousQuery.current = newQuery;
			setQuery(newQuery);
			return;
		}

		previousQuery.current = query;

		setSearchParams(
			convertToSearchParams({
				searchQuery: query.searchQuery,
				isPrivate: query.isPrivate,
				isCompleted: query.isCompleted,
				page: query.page,
			}),
		);

		if (!isDesktop) {
			getTodosAcc(query);
		} else {
			getTodos(query);
		}
	}, [query]);

	const isLastPage = (): boolean => {
		return query.page >= totalPages;
	};

	const incrementPage = (): void => {
		if (isLastPage()) return;
		setQuery({ ...query, page: query.page + 1 });
	};

	return (
		<>
			{query && (
				<>
					{isMobile && (
						<div id="scrollableDiv" style={{ height: '80vh' }}>
							<MobileTodoContainer
								todos={todos}
								currentPage={currentPage}
								totalPages={totalPages}
								incrementPage={incrementPage}
							/>
						</div>
					)}
					{isTablet && (
						<TabletTodoContainer
							todos={todos}
							isLastPage={isLastPage()}
							incrementPage={incrementPage}
						/>
					)}
					{isDesktop && (
						<DesktopTodoContainer
							todos={todos}
							totalPages={totalPages}
						/>
					)}
				</>
			)}
		</>
	);
};

export default TodoPage;
