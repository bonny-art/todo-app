import { css } from '@emotion/css';
import { fonts } from '~shared/styles/fonts';

export const logoutConfirmationContainerStyled = css`
	h2 {
		margin-bottom: 20px;
		font-family: ${fonts.interBold};
		font-size: 18px;
	}

	div {
		display: flex;
		justify-content: space-between;
	}
`;
