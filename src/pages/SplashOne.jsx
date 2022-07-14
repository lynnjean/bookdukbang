import React from 'react';
import styled from 'styled-components';
import SplashHeader from '../components/splash/SplashHeader';
import { BigBtnDiv, SplashBtn } from '../components/Common/Button.style';
import Footer from '../components/Common/Footer';
import splashImg from '../assets/splashImg.png';
import Wrap from '../components/Common/Wrap';
import {
	TitleStyle,
	Maintitle,
	Subtitle,
} from '../components/splash/SplashTtitle';

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

function Splash() {
	return (
		<ImgContainer>
			<SplashHeader />

			<Wrap>
				<TitleStyle>
					<Maintitle>노래하며 수 가슴에 할지니, </Maintitle>
					<Maintitle>이것을 싹이 타오르고 듣는다.</Maintitle>
					<Subtitle>보라. 없는 착목한는 광야에서 이것이다.</Subtitle>
				</TitleStyle>
			</Wrap>

			<BigBtnDiv>
				<SplashBtn>다양한 친구들을 만나보세요!</SplashBtn>
			</BigBtnDiv>

			<Footer />
		</ImgContainer>
	);
}

export default Splash;
