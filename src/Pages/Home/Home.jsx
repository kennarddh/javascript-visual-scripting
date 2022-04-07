import React, { useState, useRef } from 'react'
import { NodeEditor } from 'flume'

// Components
import Result from 'Components/Result/Result'

// Style
import { Container } from './Style'

// Config
import Config from 'Config/Config'

const Home = () => {
	const [Nodes, SetNodes] = useState({})

	const nodeEditor = useRef()

	// const SaveNodes = () => {
	// 	const nodes = nodeEditor.current.getNodes()

	// 	console.log(JSON.stringify(nodes))
	// }

	return (
		<>
			{/* <button onClick={SaveNodes}>Save Logic</button> */}
			<Container>
				<NodeEditor
					ref={nodeEditor}
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
