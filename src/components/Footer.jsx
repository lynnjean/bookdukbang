import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.footer`
	display: flex;
	justify-content: center;
`;

const FooterPStyle = styled.p`
	color: ${({ theme }) => theme.grayColor3};
	font-weight: 300;
	font-size: 1.6rem;
	padding: 4rem 0;
`;

function Footer() {
	return (
		<FooterStyle>
			<FooterPStyle>Copyright © 2022, All Rights Reserved</FooterPStyle>
		</FooterStyle>
	);
}

export default Footer;
