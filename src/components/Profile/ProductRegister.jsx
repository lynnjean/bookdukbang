import React from 'react';
import styled from 'styled-components';
import Book from '../../assets/BookListImg.png';
import PlusBtn from '../../assets/plus_btn.png';

const BookContainer = styled.div`
	display: grid;
	grid-template-columns: 31.5rem 31.5rem;
	grid-template-rows: 25.2rem 25.2rem;
	row-gap: 2.2rem;
	column-gap: 2rem;
	border-radius: 1rem;
	margin-top: 3rem;
`;

const BookList = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
`;

const BookBtn = styled.button`
	background-color: transparent;
	padding: 0;
	border: none;
`;

const BookImg = styled.img`
	width: 100%;
	height: 100%;
`;

const BookInfo = styled.div`
	position: absolute;
	bottom: 2.1rem;
	left: 2.1rem;
	display: flex;
	align-items: flex-start;
	flex-direction: column;
`;

const BookTitle = styled.p`
	font-weight: 400;
	font-size: 1.6rem;
	color: ${({ theme }) => theme.grayColor5};
`;

const BookCost = styled.p`
	font-weight: 700;
	font-size: 1.4rem;
	color: ${({ theme }) => theme.mainColor};
`;

const BookRegister = styled.div`
	border: 1px dashed ${({ theme }) => theme.grayColor2};
	border-radius: 1rem;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const RegisterBtn = styled.button`
	border: none;
	background-color: transparent;
	margin-bottom: 1rem;
`;

const PlusBtnImg = styled.img`
	width: 7rem;
`;

const RegisterTitle = styled.p`
	font-weight: 700;
	font-size: 2.4rem;
	color: ${({ theme }) => theme.grayColor2};
`;

function ProductRegister() {
	return (
		<>
			<BookContainer>
				<BookList>
					<BookBtn>
						<BookImg src={Book} />
						<BookInfo>
							<BookTitle>책제목</BookTitle>
							<BookCost>99,000원</BookCost>
						</BookInfo>
					</BookBtn>
				</BookList>
				<BookList>
					<BookBtn>
						<BookImg src={Book} />
						<BookInfo>
							<BookTitle>책제목</BookTitle>
							<BookCost>99,000원</BookCost>
						</BookInfo>
					</BookBtn>
				</BookList>
				<BookList>
					<BookBtn>
						<BookImg src={Book} />
						<BookInfo>
							<BookTitle>책제목</BookTitle>
							<BookCost>99,000원</BookCost>
						</BookInfo>
					</BookBtn>
				</BookList>
				<BookRegister>
					<RegisterBtn>
						<PlusBtnImg src={PlusBtn} />
					</RegisterBtn>
					<RegisterTitle>상품등록</RegisterTitle>
				</BookRegister>
			</BookContainer>
		</>
	);
}

export default ProductRegister;
