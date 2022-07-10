import styled from 'styled-components';

const InputWrap = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	max-width: 55rem;
	margin: 3rem auto 0;
	@media (max-width: 390px) {
		max-width: 32rem;
	}
`;

export default InputWrap;
