import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.footer`
	display: flex;
`;

function Footer() {
	return (
		<FooterStyle>
			<p>Copyright © 2022, All Rights Reserved</p>
		</FooterStyle>
	);
}

export default Footer;
