import styled from 'styled-components';

// FormWrap은 input을 사용하는 모든 곳에서 사용된다.
const FormWrap = styled.form`
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

// 모든
const InputStyle = styled.input`
	width: 100%;
	font-weight: 400;
	font-size: 2rem;
	border: 0.1rem solid ${({ theme }) => theme.grayColor4};
	border-radius: 0.5rem;
	color: ${({ theme }) => theme.textColor};
	padding: 2rem;
	box-sizing: border-box;
	::placeholder {
		color: ${({ theme }) => theme.grayColor3};
	}
	&:focus {
		outline: 0.1rem solid ${({ theme }) => theme.mainColor};
	}
`;

// '회원가입', '프로필 정보, '프로필 수정', '상품등록' 페이지 의 스타일
const Labelstyle = styled.label`
	width: 100%;
`;
const LabelText = styled.span`
	font-weight: 700;
	font-size: 1.4rem;
	color: ${({ theme }) => theme.grayColor2};
	display: block;
	margin-bottom: 0.5rem;
`;

// '로그인' 페이지에서 이메일, 비밀번호가 일치하지 않았을 경우만 사용.
const ErrorLabelstyle = styled.label`
	width: 100%;
`;
const ErrorLabelText = styled.span`
	color: ${({ theme }) => theme.errorColor};
	font-weight: 400;
	font-size: 1.4rem;
	display: block;
	margin-top: 0.5rem;
`;
const ErrorInput = styled(InputStyle)`
	border: 0.1rem solid ${({ theme }) => theme.errorColor};
	&:focus {
		outline: 0.1rem solid ${({ theme }) => theme.errorColor};
	}
`;

export {
	FormWrap,
	InputStyle,
	Labelstyle,
	LabelText,
	ErrorLabelstyle,
	ErrorLabelText,
	ErrorInput,
};
