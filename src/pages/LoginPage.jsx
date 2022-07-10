import React from 'react';
import Header from '../components/Header';
import MainTitle from '../components/MainTitle';
import Footer from '../components/Footer';
import styled from 'styled-components';
import BookImg from '../assets/BookImg.png';
import { BigBtnDiv } from '../components/Button.style';
import { BigBtn } from '../components/Button.style';
import InputWrap from '../components/InputWrap.style';
import { InputStyle } from '../components/Input.style';
// 이메일 또는 비밀번호가 일치하지 않았을때 import한다.
// import { ErrorLabelstyle } from '../components/Input';
// import { ErrorInput } from '../components/Input';
// import { ErrorLabelText } from '../components/Input';

const ImgWrap = styled.div`
	display: flex;
	justify-content: center;
`;

const BookLogo = styled.img`
	width: 55px;
	height: 70px;
	margin-top: 14rem;
	margin-bottom: 1rem;
	@media (max-width: 390px) {
		display: none;
	}
`;

const SubTitle = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 1rem;
	margin-bottom: 13.7rem;
`;

const SubTitleP = styled.p`
	color: ${({ theme }) => theme.grayColor1};
	font-weight: 400;
	font-size: 2rem;
	@media (max-width: 390px) {
		font-weight: 300;
		font-size: 1.4rem;
	}
`;

const SubTitleClick = styled(SubTitleP)`
	font-weight: 700;
	margin-left: 0.5rem;
	@media (max-width: 390px) {
		font-size: 14px;
	}
`;

function LoginPage() {
	return (
		<div>
			<Header />

			<ImgWrap>
				<BookLogo src={BookImg} />
			</ImgWrap>

			<MainTitle />

			<InputWrap>
				<InputStyle type="email" placeholder="아이디를 입력하세요." />
				<InputStyle
					type="password"
					placeholder="비밀번호를 입력하세요."
				/>
				{/* 이메일 혹은 비밀번호가 일치하지 않았을 경우 실행.
					<ErrorLabelstyle>
						<ErrorInput
							type="password"
							placeholder="비밀번호를 입력하세요."
						/>
						<ErrorLabelText>
							*이메일 또는 비밀번호가 일치하지 않습니다.
						</ErrorLabelText>
					</ErrorLabelstyle> */}
			</InputWrap>

			{/* input에 아무것도 입력되지않았을때는 버튼을 비활성화되야 합니다. */}
			<BigBtnDiv>
				<BigBtn>로그인</BigBtn>
			</BigBtnDiv>

			<SubTitle>
				<SubTitleP>아직 회원이 아니신가요?</SubTitleP>
				{/* '회원가입' 누르면 '회원가입'화면으로 이동 */}
				<a href="/">
					<SubTitleClick>회원가입</SubTitleClick>
				</a>
			</SubTitle>

			<Footer />
		</div>
	);
}

export default LoginPage;
