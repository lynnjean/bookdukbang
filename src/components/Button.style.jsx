import styled from 'styled-components';

// 1. '로그인', '프로필 정보', '회원가입',  '프로필 수정', '상품 등록' 페이지에서 사용되는 버튼 사이즈.
const BigBtnDiv = styled.div`
	max-width: 55rem;
	margin: 3rem auto 0;
	@media (max-width: 390px) {
		max-width: 32rem;
	}
`;
const BigBtn = styled.button`
	color: ${({ theme }) => theme.whiteColor};
	background-color: ${({ theme }) => theme.mainColor};
	border-radius: 5px;
	padding: 1.8rem 0;
	width: 100%;
	font-weight: 700;
	font-size: 2.4rem;
	border: none;
	box-sizing: border-box;
	margin-top: 3rem;
	display: block;
	/* '로그인', '회원가입', '프로필 정보' 페이지에서 아무것도 입력되지 않으면 버튼이 흐려집니다.
	opacity: 0.7;
	 */
`;

// 2.  '피드-팔로워 없음', '피드-팔로워 있음' 페이지에 사용되는 버튼 사이즈
const MediumBtnDiv = styled.div`
	max-width: 31rem;
	margin: 3rem auto 0;
`;
const MediumBtn = styled(BigBtn)``;

// 3. '유저 프로필' 페이지에 사용되는 버튼 사이즈
const SmallBtnDiv = styled.div`
	max-width: 32rem;
	margin: 3rem auto 0;
`;
const SmallBtn = styled(BigBtn)`
	padding: 1.4rem 0;
	font-size: 1.6rem;
`;

// 4. '게시물 상세 + 댓글', '채팅' 페이지에 사용되는 버튼 사이즈인데, 댓글이나 채팅이 입력되었을때 버튼
const LittleBtnDiv = styled.div`
	max-width: 12rem;
	margin: 3rem auto 0;
`;
const LittleBtn = styled(BigBtn)`
	padding: 1.3rem 0;
	font-size: 1.6rem;
`;

// 4. '게시물 상세 + 댓글', '채팅' 페이지에 사용되는 버튼 사이즈인데, 댓글이나 채팅이 입력되지 않았을때 버튼
const NoLittleBtnDiv = styled.div`
	max-width: 12rem;
	margin: 3rem auto 0;
`;
const NoLittleBtn = styled(BigBtn)`
	background-color: ${({ theme }) => theme.whiteColor};
	color: ${({ theme }) => theme.mainColor};
	padding: 1.3rem 0;
	font-size: 1.6rem;
	border: 1px solid ${({ theme }) => theme.mainColor};
`;

export {
	BigBtnDiv,
	BigBtn,
	MediumBtnDiv,
	MediumBtn,
	SmallBtnDiv,
	SmallBtn,
	LittleBtnDiv,
	LittleBtn,
	NoLittleBtnDiv,
	NoLittleBtn,
};
