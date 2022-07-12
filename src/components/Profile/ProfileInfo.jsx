import React from 'react';
import styled from 'styled-components';
import {
	Profilestyle,
	ProfileName,
	SmallProfileEmail,
} from '../ProfileName.style';
import Profile from '../../assets/profile.png';

const ProfileDiv = styled.div`
	display: flex;
	padding: 3rem 11.3rem 3rem 3rem;
	background-color: ${({ theme }) => theme.bgMainColor};
	float: left;
	border-radius: 1rem;
`;

const ProfileImg = styled.img`
	width: 18rem;
	margin-right: 2.8rem;
`;

const ProfileText = styled.p`
	font-weight: 400;
	font-size: 1.6rem;
	color: ${({ theme }) => theme.grayColor1};
	margin-top: 1rem;
	margin-bottom: 2.2rem;
`;

const ProfileFollow = styled.div`
	display: flex;
`;

const FollowStyle = styled.p`
	font-weight: 300;
	font-size: 1.4rem;
	color: ${({ theme }) => theme.grayColor1};
	display: flex;
	align-items: center;
`;

const Followers = styled(FollowStyle)``;

const Following = styled(FollowStyle)`
	margin-left: 2rem;
`;

const FollowNumStyle = styled.p`
	color: ${({ theme }) => theme.textColor};
	font-weight: 700;
	font-size: 2rem;
	margin-left: 0.5rem;
`;

function ProfileInfo() {
	return (
		<>
			<ProfileDiv>
				<ProfileImg src={Profile} />

				<Profilestyle>
					<ProfileName>애월읍 위니브 책농장</ProfileName>
					<SmallProfileEmail>@ weniv_Mandarin</SmallProfileEmail>

					<ProfileText>
						애월읍 감귤 전국 배송, 귤따기 체험, 감귤 농장
					</ProfileText>

					<ProfileFollow>
						<Followers>
							followers
							<FollowNumStyle>2950</FollowNumStyle>
						</Followers>
						<Following>
							floowings
							<FollowNumStyle>128</FollowNumStyle>
						</Following>
					</ProfileFollow>
				</Profilestyle>
			</ProfileDiv>
		</>
	);
}

export default ProfileInfo;
