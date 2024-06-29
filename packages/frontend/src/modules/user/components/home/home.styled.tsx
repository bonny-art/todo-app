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

	& a.bp5-button {
		font-family: ${fonts.interBold};
		font-size: 24px;
		color: ${colors.darkGunmetal};

		&:focus {
			outline: none;
		}
	}
`;
