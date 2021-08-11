import React from 'react'
import Product from './Product'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;

	@media (min-width: 320px) {
		flex-flow: column wrap;
	}
	@media (min-width: 728px) {
		flex-flow: row wrap;
	}
`

const Products = (props) => {
	return (
		<Container>
			<Product />
			<Product />
			<Product />
			<Product />
			<Product />
			<Product />
			<Product />
			<Product />
			<Product />
			<Product />
			<Product />
			<Product />
		</Container>
	)
}

export default Products
