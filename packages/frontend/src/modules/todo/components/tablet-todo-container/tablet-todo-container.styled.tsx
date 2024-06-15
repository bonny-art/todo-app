import { css } from '@emotion/css';

export const container = css`
	display: flex;
	align-items: center;
	justify-content: center;

	padding: 20px;
	position: relative;

	&.mySwiper {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`;
