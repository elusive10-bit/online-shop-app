import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	flex: 1 1 30%;
	max-width: 600px;

	@media (min-width: 320px) {
		flex-flow: column wrap;
	}

	@media (min-width: 425px) {
		flex-flow: row wrap;
	}

	/* max-width: 700px; */

	align-items: center;
	justify-content: space-between;
	padding: 10px 20px;
	padding-bottom: 25px;

	@media (min-width: 320px) {
		border-bottom: 1px solid #aaaaaa;
	}

	@media (min-width: 768px) {
		border: 1px solid #aaaaaa;
	}

	margin-left: 10px;
	margin-right: 10px;

	@media (min-width: 768px) {
		margin-bottom: 10px;
	}
`

const ProductInfo = styled.div`
	padding: 10px 20px;
	line-height: 1.7rem;
	h2 {
		font-size: 1rem;
	}
`

const ButtonContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	align-items: center;

	button {
		padding: 10px 20px;
	}
`

const ImageContainer = styled.div`
	background-color: #b6a789;
	position: relative;
	padding: 5px;
	img {
		width: 90px;
		height: 90px;
	}
`

const Price = styled.div`
	position: absolute;
	bottom: 0px;
	right: 0px;
	background-color: #cccc;
	color: #fff;
	padding-left: 5px;
	padding-right: 5px;

	h3 {
		font-size: 1rem;
	}
`

const Product = (props) => {
	return (
		<Container>
			<ImageContainer>
				<img
					src='images/dummy-placeholder.svg'
					alt='dummy placeholder'
					width='50'
					height='50'
				/>

				<Price>
					<h3>$100</h3>
				</Price>
			</ImageContainer>

			<ProductInfo>
				<h2>Product Name</h2>
				<h2>Stock: 25</h2>
			</ProductInfo>

			<ButtonContainer>
				<button>Add To Cart</button>
			</ButtonContainer>
		</Container>
	)
}

export default Product
