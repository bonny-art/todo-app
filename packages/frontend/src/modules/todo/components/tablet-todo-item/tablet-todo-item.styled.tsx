import { css } from '@emotion/css';
import { colors } from '~shared/styles';
import { fonts } from '~shared/styles/fonts';

export const cardContainer = css`
	padding: 0 11vw 30px;
`;

export const cardStyled = css`
	display: flex;
	flex-direction: column;
	gap: 20px;

	border: 2px solid ${colors.chineseBlackTransp};
	border-radius: 2px;

	padding: 20px;
`;

export const titleStyled = css`
	font-family: ${fonts.interBold};
	font-size: 17px;
	word-wrap: break-word;
`;

export const descriptionStyled = css`
	font-family: ${fonts.inter};
	font-size: 20px;
	height: 308px;
	word-wrap: break-word;
	overflow-y: auto;
`;

export const controlsContainer = css`
	display: flex;
	align-items: center;
	justify-content: space-between;

	.switch {
		margin-bottom: 0;

		display: flex;
		flex-direction: row-reverse;
		align-items: baseline;

		font-size: 20px;
		font-family: ${fonts.inter};
	}
`;

export const buttonsContainer = css`
	display: flex;
	gap: 10px;
`;

export const button = css`
	font-family: ${fonts.inter};
	font-size: 20px;
	padding: 10px 20px;
`;
