import { css } from '@emotion/css';
import { colors } from '~shared/styles';
import { fonts } from '~shared/styles/fonts';

export const container = css`
	margin-bottom: 20px;
	button {
		font-family: ${fonts.inter};
		display: flex;
		justify-content: center;
		align-items: center;
		height: 34px;

		svg {
			width: 20px;
			height: 20px;
		}
	}
`;

export const searchFormStyled = css`
	width: 100%;
	display: flex;
	align-items: center;
	gap: 5px;
`;

export const inputContainer = css`
	position: relative;

	.error-styled {
		position: absolute;
		bottom: -11px;
		left: 0;

		color: ${colors.bostonUniversityRed};
		font-size: 12px;
	}
`;

export const input = css`
	width: 100%;
	height: 34px;
	font-family: ${fonts.interBold};

	border: 1px solid ${colors.lightSilver};
	border-radius: 5px;
	padding: 5px;
`;
