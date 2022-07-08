import React from 'react';
import styled from 'styled-components';

const FormDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	max-width: 55rem;
	margin: 3rem auto 0;
`;

const InputStyle = styled.input`
	width: 100%;
	font-weight: 400;
	font-size: 2rem;
	border: 0.1rem solid ${({ theme }) => theme.grayColor4};
	border-radius: 0.5rem;
	color: ${({ theme }) => theme.textColor};
	padding: 2rem;
	box-sizing: border-box;

	/* 기본 색  */
	&:focus {
		outline: 0.1rem solid ${({ theme }) => theme.mainColor};
	}

	/* 오류났을때 붉은색  */
	&:focus {
		outline: 0.1rem solid ${({ theme }) => theme.errorColor};
	}

	@media only screen and (${({ theme }) => theme.size.mobile}) {
		padding: 1rem;
		width: 32rem;
	}
`;

const Labelstyle = styled.label`
	width: 100%;
`;

const LabelText = styled.span`
	font-weight: 700;
	font-size: 1.4rem;
	color: ${({ theme }) => theme.grayColor2};
	display: block;
	margin-bottom: 0.5rem;
`;

function Input() {
	return (
		<FormDiv>
			<Labelstyle>
				<LabelText>아이디</LabelText>
				<InputStyle type="text" placeholder="아이디를 입력하세요." />
			</Labelstyle>
			<Labelstyle>
				<LabelText>비밀번호</LabelText>
				<InputStyle
					type="password"
					placeholder="비밀번호를 입력하세요."
				/>
			</Labelstyle>
		</FormDiv>
	);
}

export default Input;
