import React, { useState, useCallback } from 'react'
import ReactFlow, {
	Controls,
	Background,
	addEdge,
	applyEdgeChanges,
	applyNodeChanges,
	useReactFlow,
} from 'react-flow-renderer'

// Style
import {} from './Style'

// Config
import { InitialNodes, InitialEdges, NodeTypes, NodeTypesData } from './Config'

// Utils
import { CreateSourceOrTargetObject } from './Utils'

const Home = () => {
	const [Nodes, SetNodes] = useState(InitialNodes)
	const [Edges, SetEdges] = useState(InitialEdges)
	const [Connections, SetConnections] = useState({})
	const [NodeCount, SetNodeCount] = useState(0)

	const ReactFlowInstance = useReactFlow()

	const CreateNode = useCallback(
		type => {
			const id = `${NodeCount}`

			const newNode = {
				id,
				position: {
					x: Math.random() * 500,
					y: Math.random() * 500,
				},
				type,
				data: {
					label: `Node ${id}`,
				},
			}

			ReactFlowInstance.addNodes(newNode)

			SetNodeCount(nodeCount => nodeCount + 1)

			SetConnections(connections => ({
				...connections,
				[id]: {
					id,
					type,
					handle: {
						source: CreateSourceOrTargetObject(
							NodeTypesData[type].source
						),
						target: CreateSourceOrTargetObject(
							NodeTypesData[type].target
						),
					},
				},
			}))
		},
		[NodeCount, ReactFlowInstance]
	)

	const OnNodesChange = useCallback(
		changes => SetNodes(nodes => applyNodeChanges(changes, nodes)),
		[SetNodes]
	)
	const OnEdgesChange = useCallback(
		changes => SetEdges(edges => applyEdgeChanges(changes, edges)),
		[SetEdges]
	)

	const OnConnect = useCallback(
		connection => {
			if (
				Edges.find(
					edge => edge.targetHandle === connection.targetHandle
				)
			)
				return

			SetEdges(edges => {
				return addEdge(
					{
						...connection,
						markerEnd: { type: 'arrowclosed' },
					},
					edges
				)
			})
		},
		[SetEdges, Edges]
	)

	return (
		<>
			<button onClick={() => CreateNode('PrimitiveVariableNode')}>
				Create Primitive Variable Node
			</button>
			<button onClick={() => CreateNode('OperationMathAddNode')}>
				Create Operation Math Add Node
			</button>
			<div style={{ width: '100vw', height: '80vh' }}>
				<ReactFlow
					nodes={Nodes}
					edges={Edges}
					nodeTypes={NodeTypes}
					onNodesChange={OnNodesChange}
					onEdgesChange={OnEdgesChange}
					onConnect={OnConnect}
					fitView
				>
					<Background />
					<Controls />
				</ReactFlow>
			</div>
		</>
	)
}

export default Home
