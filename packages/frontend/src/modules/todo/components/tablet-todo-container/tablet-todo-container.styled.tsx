import { css } from '@emotion/css';
import { colors } from '~shared/styles';
import { fonts } from '~shared/styles/fonts';

export const container = css`
	padding: 20px;
	position: relative;

	.options {
		display: flex;
		justify-content: space-between;
		padding: 0 11vw 20px;
	}
`;

export const buttonStyled = css`
	margin-bottom: 40px;

	display: block;
	margin-left: auto;
	margin-right: auto;

	padding: 20px 50px;

	font-family: ${fonts.inter};
	font-size: 20px;
	padding: 10px 20px;
`;

export const noTodosStyled = css`
	margin-top: 100px;
	text-align: center;
`;

export const swiperStled = css`
	.swiper-pagination-bullet-active {
		background-color: ${colors.bostonUniversityRed};
	}
`;
