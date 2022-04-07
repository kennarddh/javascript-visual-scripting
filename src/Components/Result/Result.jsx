import React from 'react'

import { useRootEngine } from 'flume'

import Engine from 'Engine/Engine'

// Style
import { OutputContainer, Title, ResultContainer } from './Style'

// Components
import Output from 'Components/Output/Output'

const Result = ({ nodes }) => {
	const data = useRootEngine(nodes, Engine, {})

	return (
		<ResultContainer>
			<Title>Output</Title>
			<OutputContainer>
				{Object.keys(data).map(key => {
					if (!key.startsWith('output')) return null

					return (
						<Output
							key={key}
							name={`Output ${key.split('output')[1]}`}
							description={data[key]}
						/>
					)
				})}
			</OutputContainer>
		</ResultContainer>
	)
}

export default Result
