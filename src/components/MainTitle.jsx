import React from 'react';
import styled from 'styled-components';

const TitleStyle = styled.h1`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0 3.4rem;
	margin-bottom: 3rem;
	@media (max-width: 390px) {
		align-items: flex-start;
		margin-top: 7rem;
	}
`;

const TitleP = styled.p`
	color: ${({ theme }) => theme.textColor};
	font-weight: 700;
	font-size: 3.6rem;
	@media (max-width: 390px) {
		font-size: 2.4rem;
	}
`;

function MainTitle() {
	return (
		<TitleStyle>
			{/* '로그인' 화면에서 문구 */}
			<TitleP>BOOK덕방에서</TitleP>
			<TitleP>다양한 책을 만나보세요!</TitleP>

			{/* '회원가입' 화면에서 문구 */}
			{/* <TitleP>이메일로 간편하게</TitleP>
			<TitleP>회원가입을 시작해볼까요?</TitleP> */}
		</TitleStyle>
	);
}

export default MainTitle;
