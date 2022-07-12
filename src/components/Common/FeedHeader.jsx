import React from 'react';
import styled from 'styled-components';
import HeaderLogo from '../../assets/HeaderLogo.png';
import Profile from '../../assets/profile.png';
import PostingIcon from '../../assets/PostingIcon.png';
import LogoutIcon from '../../assets/LogoutIcon.png';

const HeaderStyle = styled.header`
	background-color: ${({ theme }) => theme.bgMainColor};
	padding: 2.7rem 0;
`;

const Wrap = styled.div`
	max-width: 140rem;
	padding: 0 2em;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const HeaderUI = styled.ul`
	display: flex;
	align-items: center;
	gap: 2.5rem;
`;

const HeaderBtnStyle = styled.button`
	display: flex;
	border-radius: 5px;
	width: 12rem;
	color: white;
	font-weight: 700;
	font-size: 16px;
	justify-content: center;
	padding: 1.4rem 0;
	line-height: 1;
	border: none;
`;

const HeaderBtnPosting = styled(HeaderBtnStyle)`
	background-color: ${({ theme }) => theme.mainColor};
`;

const HeaderBtnLogout = styled(HeaderBtnStyle)`
	background-color: ${({ theme }) => theme.grayColor4};
`;

const LogoImg = styled.img`
	width: 21.5rem;
`;

const ProfileImg = styled.img`
	width: 5rem;
`;

const PostingImg = styled.img`
	width: 1.9rem;
	margin-right: 1rem;
`;

const LogoutImg = styled.img`
	width: 2.1rem;
	margin-right: 0.9rem;
`;

function FeedHeader() {
	return (
		<HeaderStyle>
			<Wrap>
				<a href="/">
					<LogoImg src={HeaderLogo} alt="북덕방" />
				</a>

				<HeaderUI>
					<li>
						<a href="/">
							<ProfileImg src={Profile} alt="프로필" />
						</a>
					</li>
					<li>
						<HeaderBtnPosting>
							<a href="/">
								<PostingImg src={PostingIcon} alt="포스팅" />
								<span>Posting</span>
							</a>
						</HeaderBtnPosting>
					</li>
					<li>
						<HeaderBtnLogout>
							<a href="/">
								<LogoutImg src={LogoutIcon} alt="로그아웃" />
								<span>Logout</span>
							</a>
						</HeaderBtnLogout>
					</li>
				</HeaderUI>
			</Wrap>
		</HeaderStyle>
	);
}

export default FeedHeader;
