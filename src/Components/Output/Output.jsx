import React from 'react'

// Style
import { Container, Title, Description } from './Style'

const Output = ({ name, description }) => {
	return (
		<Container>
			<Title>{name}</Title>
			<Description>{description}</Description>
		</Container>
	)
}

export default Output
