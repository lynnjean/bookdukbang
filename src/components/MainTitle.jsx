import React from 'react';
import styled from 'styled-components';

const TitleStyle = styled.h1`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0 3.4rem;
	@media (max-width: 432px) {
		align-items: flex-start;
	}
`;

const TitleP = styled.p`
	color: ${({ theme }) => theme.textColor};
	font-weight: 700;
	font-size: 3.6rem;
	@media (max-width: 432px) {
		font-size: 2.4rem;
	}
`;

function MainTitle() {
	return (
		<TitleStyle>
			<TitleP>BOOK덕방에서</TitleP>
			<TitleP>다양한 책을 만나보세요!</TitleP>
		</TitleStyle>
	);
}

export default MainTitle;
