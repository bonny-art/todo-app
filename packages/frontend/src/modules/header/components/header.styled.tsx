import { css } from '@emotion/css';
import { colors } from '~shared/styles';
import { fonts } from '~shared/styles/fonts';

export const headerStyled = css`
	display: flex;
	justify-content: space-between;
	align-items: center;

	font-family: ${fonts.inter};

	padding: 20px 10px;

	div {
		display: flex;
		align-items: center;
		gap: 20px;
	}

	a {
		font-size: 24px;
		color: ${colors.darkGunmetal};

		&.active {
			color: ${colors.bostonUniversityRed};
		}

		&:hover {
			text-decoration: none;
		}

		&:focus {
			outline: none;
		}
	}
`;

export const addTodoButton = css`
	font-family: ${fonts.inter};
	margin-bottom: 20px;
`;

export const tableStyle = css`
	width: 100%;
	border-collapse: collapse;

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
`;
