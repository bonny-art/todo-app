import { css } from '@emotion/css';
import { colors } from '~shared/styles';
import { fonts } from '~shared/styles/fonts';

export const container = css`
	margin-bottom: 20px;
	display: flex;
	gap: 5px;

	button {
		font-family: ${fonts.inter};

		height: 34px;

		&.active {
			background-color: ${colors.bostonUniversityRed};
			color: ${colors.white};

			&:hover {
				background-color: ${colors.crimsonRed} !important;
			}
		}

		&:hover {
			background-color: ${colors.bostonUniversityRedTransp} !important;
		}
	}
`;
