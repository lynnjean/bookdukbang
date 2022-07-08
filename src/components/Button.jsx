import React from 'react';
import styled from 'styled-components';

const ButtonDiv = styled.div`
	max-width: 55rem;
	margin: 3rem auto 0;
`;

const ButtonStyle = styled.button`
	color: ${({ theme }) => theme.whiteColor};
	background-color: ${({ theme }) => theme.mainColor};
	border-radius: 5px;
	padding: 1.8rem 0;
	width: 100%;
	font-weight: 700;
	font-size: 2.4rem;
	border: none;
	box-sizing: border-box;
	margin-top: 2rem;
`;

function Button() {
	return (
		<ButtonDiv>
			<ButtonStyle>로그인</ButtonStyle>
			{/* 회원가입 창에는 '다음' 문구*/}
		</ButtonDiv>
	);
}

export default Button;
