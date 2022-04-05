import React from 'react'

// Style
import { NoMatchContainer, NoMatchBody, NoMatchH1, NoMatchP } from './Style'

const NoMatch = () => {
	return (
		<>
			<NoMatchContainer>
				<NoMatchBody>
					<NoMatchH1>404</NoMatchH1>
					<NoMatchP>This page could not be found.</NoMatchP>
				</NoMatchBody>
			</NoMatchContainer>
		</>
	)
}

export default NoMatch
