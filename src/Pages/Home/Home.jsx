import React, { useRef } from 'react'
import { NodeEditor } from 'flume'

// Style
import { Container } from './Style'

// Config
import Config from 'Config/Config'

const Home = () => {
	const nodeEditor = useRef()

	const SaveNodes = () => {
		const nodes = nodeEditor.current.getNodes()

		console.log(JSON.stringify(nodes))
	}

	return (
		<>
			<button onClick={SaveNodes}>Save Logic</button>
			<Container>
				<NodeEditor
					ref={nodeEditor}
					portTypes={Config.portTypes}
					nodeTypes={Config.nodeTypes}
					defaultNodes={[
						{
							type: 'homepage',
							x: 190,
							y: -150,
						},
					]}
				/>
			</Container>
		</>
	)
}

export default Home
