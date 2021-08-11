import Nav from './components/Nav'
import Products from './components/Products'
import styled from 'styled-components'

const Container = styled.div``
const Main = styled.div`
	background-color: #fff;
	padding: 10px 15px;
`
const Find = styled.div`
	display: flex;
	flex-flow: column wrap;
	margin-bottom: 20px;

	input {
		height: 60px;
		padding: 10px 20px;
		font-size: 1.1rem;
	}
`

const Footer = styled.div`
	display: flex;
	flex-flow: row;
	justify-content: center;

	background-color: #4e4e4e;
	padding: 10px 15px;
	color: #fff;

	h3 {
		font-size: 1rem;
	}
`

function App() {
	return (
		<Container>
			<Nav />

			<Main>
				<Find>
					<label htmlFor='search'>Search</label>
					<input type='text' id='search' placeholder='Search' />
				</Find>
				<Products />
			</Main>
			<Footer>
				<h3>&copy; All rights reserved 2021 - 2022</h3>
			</Footer>
		</Container>
	)
}

export default App
