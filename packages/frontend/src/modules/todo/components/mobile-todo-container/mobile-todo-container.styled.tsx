import { css } from '@emotion/css';
import { fonts } from '~shared/styles/fonts';

export const todosContainerStyled = css`
	display: flex;
	flex-direction: column;
	gap: 20px;

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
