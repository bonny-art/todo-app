import { css } from '@emotion/css';
import { colors } from '~shared/styles';
import { fonts } from '~shared/styles/fonts';

export const container = css`
	h2 {
		font-family: ${fonts.inter};
		margin-bottom: 20px;
	}

	button {
		font-family: ${fonts.inter};
	}
`;

export const inputContainer = css`
	position: relative;
	margin-bottom: 20px;

	.error-styled {
		position: absolute;
		bottom: -16px;
		left: 0;

		color: ${colors.bostonUniversityRed};
		font-size: 12px;
	}
`;

export const titleInput = css`
	width: calc(100% - 40px);

	word-wrap: break-word;
	font-family: ${fonts.interBold};
	height: 81px;

	border: 1px solid ${colors.lightSilver};
	border-radius: 5px;
	padding: 5px;
	resize: none;
`;

export const input = css`
	width: 100%;
	font-family: ${fonts.interBold};

	border: 1px solid ${colors.lightSilver};
	border-radius: 5px;
	padding: 5px;
`;
