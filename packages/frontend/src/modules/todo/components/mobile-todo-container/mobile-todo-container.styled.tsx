import { css } from '@emotion/css';
import { fonts } from '~shared/styles/fonts';

export const todosContainerStyled = css`
	display: flex;
	flex-direction: column;

	font-family: ${fonts.inter};

	padding: 20px 10px;

	button {
		font-family: ${fonts.inter};
	}
`;

export const listStyled = css`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const addTodoButton = css`
	margin-bottom: 20px;
`;

export const observerElementStyled = css`
	height: 1px;
	width: 100%;
	margin: -1px;
`;
