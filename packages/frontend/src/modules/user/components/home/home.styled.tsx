import { css } from '@emotion/css';
import { colors } from '~shared/styles';
import { fonts } from '~shared/styles/fonts';

export const container = css`
	display: flex;
	flex-direction: column;
	gap: 40px;

	max-width: 375px;
	width: 100%;
	margin-left: auto;
	margin-right: auto;

	padding: 20px;

	& a:hover {
		text-decoration: none;
	}

	& button.bp5-button {
		display: block;
		width: 100%;
		font-family: ${fonts.interBold};
		font-size: 24px;
		color: ${colors.darkGunmetal};
		text-align: center;

		&:focus {
			outline: none;
		}
	}
`;
