import React from 'react';
import styled from 'styled-components';
import SplashHeader from '../components/splash/SplashHeader';
import { ButtonStyle } from '../components/Common/Button.style';
import Footer from '../components/Common/Footer';
import splashImg from '../assets/splashImg.png';
import Wrap from '../components/Common/Wrap';
import {
	TitleStyle,
	Maintitle,
	JoinTitle,
	JoinTitleP,
	JoinTitleClick,
} from '../components/splash/SplashTtitle';
import Email from '../assets/email.png';
import Kakao from '../assets/kakao.png';
import Google from '../assets/google.png';
import Facebook from '../assets/facebook.png';
import HoverKakao from '../assets/HoverKakao.png';

const GoogleImg = styled.img`
	width: 3rem;
	position: absolute;
	top: 2rem;
	left: 3.5rem;
`;
const FacebookImg = styled.img`
	width: 1.8rem;
	position: absolute;
	top: 1.8rem;
	left: 4rem;
`;

const ImgContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-image: url(${splashImg});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
`;

const LoginBtnDiv = styled.div`
	border: 1px solid white;
	max-width: 55rem;
	margin: 8.3rem auto 0;
	@media ${({ theme }) => theme.size.mobile} {
		max-width: 32rem;
	}
`;

const LoginBtn = styled(ButtonStyle)`
	padding: 2rem 0;
	font-size: 2.4rem;
	margin-top: 2rem;
	background-color: transparent;
	display: block;
	position: relative;
	box-sizing: border-box;
	@media ${({ theme }) => theme.size.mobile} {
		padding: 1.4rem 0;
		font-size: 1.6rem;
		margin-top: 1rem;
	}
`;

const EmailBtn = styled(LoginBtn)`
	border: 2px solid ${({ theme }) => theme.mainColor};

	&::before {
		content: url(${Email});
		width: 3.3rem;
		height: 2.6rem;
		display: inline-block;
		position: absolute;
		top: 0;
		left: 0;
		margin: 2.1rem 3.3rem;
		@media ${({ theme }) => theme.size.mobile} {
			width: 2rem;
			height: 1.6rem;
			margin: 1.7rem 1.6rem;
		}
	}

	&:hover {
		background-color: ${({ theme }) => theme.mainColor};
	}
`;

const KakaoBtn = styled(LoginBtn)`
	border: 2px solid #f2c94c;
	position: relative;

	&::before {
		content: '';
		position: absolute;
		background: url(${Kakao}) no-repeat center / 3.3rem 3.3rem;
		top: 0;
		left: 0;
		width: 3.3rem;
		height: 3.3rem;
		margin: 2.1rem 3.3rem;
		@media ${({ theme }) => theme.size.mobile} {
			width: 2rem;
			height: 1.6rem;
			margin: 1.7rem 1.6rem;
		}
	}

	&:hover {
		background-color: #f2c94c;

		&::before {
			background: url(${HoverKakao}) no-repeat center / 3.3rem 3.3rem;
		}
	}
`;

const GoggleBtn = styled(LoginBtn)`
	border: 2px solid ${({ theme }) => theme.grayColor3};
	position: relative;
`;

const FacebookBtn = styled(LoginBtn)`
	border: 2px solid #2d9cdb;
	position: relative;
`;

function Splash() {
	return (
		<ImgContainer>
			<SplashHeader />

			<Wrap>
				<TitleStyle>
					<Maintitle>환영합니다!</Maintitle>
					<Maintitle>계정을 선택해주세요.</Maintitle>
				</TitleStyle>
			</Wrap>

			<LoginBtnDiv>
				<EmailBtn>
					{/* <EmailImg src={Email} /> */}
					이메일로 로그인
				</EmailBtn>
				<KakaoBtn>
					{/* <KakaoImg src={Kakao} />
					<HoverKakaoImg src={HoverKakao} /> */}
					카카오톡 계정으로 로그인
				</KakaoBtn>
				<GoggleBtn>
					<GoogleImg src={Google} />
					구글 계정으로 로그인
				</GoggleBtn>
				<FacebookBtn>
					<FacebookImg src={Facebook} />
					페이스북 계정으로 로그인
				</FacebookBtn>
			</LoginBtnDiv>

			<JoinTitle>
				<JoinTitleP>아직 회원이 아니신가요?</JoinTitleP>
				<a href="/">
					<JoinTitleClick>회원가입</JoinTitleClick>
				</a>
			</JoinTitle>

			<Footer />
		</ImgContainer>
	);
}

export default Splash;
