import React from 'react';
import styled from 'styled-components';
import Wrap from './Wrap';

const FooterStyle = styled.footer`
	display: flex;
	justify-content: center;
`;

const FooterPStyle = styled.p`
	color: ${({ theme }) => theme.grayColor3};
	font-weight: 300;
	font-size: 1.6rem;
	padding: 4rem 0;
	@media (max-width: 430px) {
		font-size: 1.2rem;
	}
`;

function Footer() {
	return (
		<Wrap>
			<FooterStyle>
				<FooterPStyle>
					Copyright © 2022, All Rights Reserved
				</FooterPStyle>
			</FooterStyle>
		</Wrap>
	);
}

export default Footer;
