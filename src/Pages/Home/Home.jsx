import React, { useState, useEffect } from 'react'
import { NodeEditor } from 'flume'

// Components
import Result from 'Components/Result/Result'

// Style
import { Container } from './Style'

// Config
import Config from 'Config/Config'

const Home = () => {
	const [Nodes, SetNodes] = useState({})

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
				/>
				<Result nodes={Nodes} />
			</Container>
		</>
	)
}

export default Home
