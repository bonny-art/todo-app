import { css } from '@emotion/css';
import { fonts } from '~shared/styles/fonts';

export const container = css`
	h2 {
		width: calc(100% - 40px);
		margin-bottom: 20px;
		word-wrap: break-word;
		font-family: ${fonts.interBold};
		font-size: 18px;
		height: 81px;
		overflow-x: auto;
		padding: 5px;
	}

	p {
		word-wrap: break-word;
		font-family: ${fonts.inter};
		overflow-x: auto;
		height: 213px;
		margin-bottom: 20px;
	}

	.switch {
		margin-bottom: 10px;
		font-family: ${fonts.inter};

		&.bp5-control.bp5-disabled {
			cursor: default;
		}
	}

	button {
		margin-top: 30px;
		font-family: ${fonts.inter};
	}
`;
