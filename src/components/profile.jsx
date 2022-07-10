import React from 'react';
import styled from 'styled-components';
// import styled from 'styled-components';
import profileimg from '../assets/profile.png';

const Divstyle = styled.div`
	border: 0.1rem solid red;
	width: 31rem;
	height: 9.2rem;
	/* display: flex; */
`;

const ProfileImg = styled.img`
	width: 5.2rem;
	height: 5.2rem;
	padding: 2rem;
`;

const ProfileName = styled.p`
	font-weight: 700;
	font-size: 2rem;
	color: ${({ theme }) => theme.textColor};
`;

const ProfileEmail = styled.p`
	font-weight: 300;
	font-size: 1.6rem;
	color: ${({ theme }) => theme.grayColor2};
`;

function Profile() {
	return (
		<Divstyle>
			<ProfileImg src={profileimg} />
			<ProfileName>애월읍 위니브 감귤농장</ProfileName>
			<ProfileEmail>@ weniv_Mandarin</ProfileEmail>
		</Divstyle>
	);
}

export default Profile;
