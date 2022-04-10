import React, { useState } from 'react'
import { NodeEditor } from 'flume'

// Components
import Result from 'Components/Result/Result'

// Style
import { Container } from './Style'

// Config
import Config from 'Config/Config'
import DefaultNodes from 'Config/DefaultNodes'

const Home = () => {
	const [Nodes, SetNodes] = useState(DefaultNodes)

	return (
		<>
			<Container>
				<NodeEditor
					portTypes={Config.portTypes}
					nodeTypes={Config.nodeTypes}
					onChange={SetNodes}
					defaultNodes={[
						{
							type: 'output',
							x: 0,
							y: 0,
						},
					]}
					nodes={Nodes}
				/>
				<Result nodes={Nodes} />
			</Container>
		</>
	)
}

export default Home
