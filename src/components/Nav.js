import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	position: relative;
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	justify-content: space-between;
	background-color: #4e4e4e;
	padding: 10px;

	img:nth-child(2) {
		width: 40px;
		height: 40px;
	}
`

export default function Nav({ showCartNav, setShowCartNav }) {
	return (
		<Container>
			<img
				src='images/dummy-logo.svg'
				alt='dummy logo'
				width='50'
				height='50'
			/>
			<img
				src='images/cart.svg'
				alt='dummy logo'
				width='40'
				height='40'
				onClick={() => setShowCartNav(!showCartNav)}
			/>
		</Container>
	)
}
