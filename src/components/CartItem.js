import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	flex-flow: row wrap;

	padding: 10px 20px;
	border-bottom: 1px solid #ccc;

	h3 {
		font-size: 0.9rem;
	}
`

const ImageContainer = styled.div`
	position: relative;
	background-color: #b6a789;
	padding: 5px 5px;
	img {
		display: flex;
		flex: 1;
		width: 60px;
		height: 60px;
	}
`

const Caption = styled.div`
	position: absolute;
	bottom: 0px;
	right: 0px;
	background-color: #7d7d7daa;
	color: #fff;
`

const ProductInfo = styled.div`
	flex: 1;
	margin-right: 10px;
	margin-left: 10px;
`

const ButtonContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-items: center;
	flex: 1;

	button {
		padding: 10px 20px;
	}
`

const CartItem = () => {
	return (
		<Container>
			<ImageContainer>
				<img
					src='images/dummy-placeholder.svg'
					alt='dummy placeholder'
					width='50'
					height='50'
				/>

				<Caption>
					<h3>$100</h3>
				</Caption>
			</ImageContainer>

			<ProductInfo>
				<h3>Product Name</h3>
				<h3>Product Price</h3>
				<h3>Product Stock</h3>
			</ProductInfo>

			<ButtonContainer>
				<button>Remove</button>
			</ButtonContainer>
		</Container>
	)
}

export default CartItem
