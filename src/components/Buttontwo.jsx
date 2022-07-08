import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
	color: ${({ theme }) => theme.whiteColor};
	background-color: ${({ theme }) => theme.mainColor};
	border-radius: 5px;
	padding: 1.8rem 0;
	width: 55rem;
	font-weight: 700;
	font-size: 2.4rem;
	border: none;
	box-sizing: border-box;
	margin-top: 2rem;

	@media only screen and (${({ theme }) => theme.size.mobile}) {
		width: 32rem;
		padding: 1rem 0;
	}
`;

function Buttontwo() {
	return (
		<div>
			<ButtonStyle>로그인</ButtonStyle>
		</div>
	);
}

export default Buttontwo;
