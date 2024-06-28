import { css } from '@emotion/css';
import { colors } from '~shared/styles';
import { fonts } from '~shared/styles/fonts';

export const todosContainerStyled = css`
	font-family: ${fonts.inter};

	padding: 20px 10px;

	.options {
		display: flex;
		justify-content: space-between;
	}
`;

export const addTodoButton = css`
	font-family: ${fonts.inter};
	margin-bottom: 20px;
`;

export const tableStyle = css`
	width: 100%;
	border-collapse: collapse;
	height: 745px;

	margin-bottom: 20px;

	tr {
		display: flex;
	}

	th,
	td {
		display: inline-block;
		padding: 8px;
		text-align: left;
		border-bottom: 1px solid #ddd;
		word-wrap: break-word;
	}

	th {
		background-color: ${colors.antiFlashWhite};
	}

	tr:hover {
		background-color: ${colors.brightGray};
	}

	th:nth-of-type(1),
	td:nth-of-type(1) {
		width: calc((100vw - 296px) * 0.25);
	}

	th:nth-of-type(2),
	td:nth-of-type(2) {
		width: calc((100vw - 296px) * 0.75);
	}

	th:nth-of-type(3),
	td:nth-of-type(3) {
		width: 276px;
	}

	.title-cell,
	.description-cell {
		vertical-align: top;
	}

	.actions-cell {
		text-align: justify;
		display: inline-flex;
		align-items: center;
	}

	.button {
		margin-right: 20px;
		font-family: ${fonts.inter};
	}

	.switch {
		display: inline-block;

		&.bp5-control.bp5-disabled {
			cursor: default;
		}
	}

	.description-cell {
		height: 71px;

		div {
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
			overflow: hidden;
			text-overflow: ellipsis;
		}
	}
`;

export const noTodosStyled = css`
	margin-top: 100px;
	text-align: center;
`;

export const MyPaginate = css`
	margin-bottom: 32px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 10px;

	list-style-type: none;

	li a {
		border-radius: 2px;
		padding: 5px 10px;

		cursor: pointer;
		text-decoration: none;
		color: ${colors.bostonUniversityRed};

		box-shadow:
			0 0 0 1px rgba(17, 20, 24, 0.1),
			0 1px 1px rgba(17, 20, 24, 0.2),
			0 2px 6px rgba(17, 20, 24, 0.2);

		&:focus {
			outline: none;
		}

		&:hover {
			box-shadow:
				0 0 0 1px rgba(17, 20, 24, 0.1),
				0 2px 4px rgba(17, 20, 24, 0.2),
				0 8px 24px rgba(17, 20, 24, 0.2);
		}
	}
	li.previous a,
	li.next a,
	li.break a {
		border-color: transparent;
	}
	li.selected a {
		background-color: ${colors.bostonUniversityRed};
		border-color: transparent;
		color: ${colors.white};
		cursor: default;
	}
	li.disabled a {
		color: ${colors.lightSilver};
		cursor: none;
	}
	li.disable,
	li.disabled a {
		cursor: default;
		&:hover {
			box-shadow:
				0 0 0 1px rgba(17, 20, 24, 0.1),
				0 1px 1px rgba(17, 20, 24, 0.2),
				0 2px 6px rgba(17, 20, 24, 0.2);
		}
	}
`;
