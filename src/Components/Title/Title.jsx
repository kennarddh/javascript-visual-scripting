import React from 'react'

// Style
import { TitleDiv, TitleH1 } from './Style'

const Title = props => {
	return (
		<>
			<TitleDiv>
				<TitleH1>{props.title}</TitleH1>
			</TitleDiv>
		</>
	)
}

export default Title
