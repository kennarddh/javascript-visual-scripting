// Node
import PrimitiveVariableNode from 'Components/Flow/Node/Variables/Primitive/Primitive'
import OperationMathAddNode from 'Components/Flow/Node/Operation/Math/Add/Add'

export const InitialNodes = [
	{
		id: 'Node 1',
		type: 'PrimitiveVariableNode',
		data: { label: 'Primitive Variable Node' },
		position: { x: 100, y: -100 },
	},
	{
		id: 'Node 2',
		type: 'PrimitiveVariableNode',
		data: { label: 'Primitive Variable Node' },
		position: { x: 100, y: 100 },
	},
	{
		id: 'Node 3',
		type: 'OperationMathAddNode',
		data: { label: 'Operation Math Add Node' },
		position: { x: 300, y: 0 },
	},
]

export const InitialEdges = [
	{
		id: 'edge-1',
		source: 'Node 1',
		target: 'Node 3',
		sourceHandle: 'output-1',
		targetHandle: 'input-1',
		markerEnd: { type: 'arrowclosed' },
	},
	{
		id: 'edge-2',
		source: 'Node 2',
		target: 'Node 3',
		sourceHandle: 'output-1',
		targetHandle: 'input-2',
		markerEnd: { type: 'arrowclosed' },
	},
]

export const NodeTypes = {
	PrimitiveVariableNode,
	OperationMathAddNode,
}

export const NodeTypesData = {
	PrimitiveVariableNode: {
		source: ['output-1'],
		target: [],
	},
	OperationMathAddNode: {
		source: ['output-1'],
		target: ['input-1', 'input-2'],
	},
}
// if (
// 	Edges.find(
// 		edge =>
// 			edge.source === connection.source &&
// 			edge.target === connection.target &&
// 			edge.sourceHandle === connection.sourceHandle &&
// 			edge.targetHandle === connection.targetHandle
// 	)
// )
// 	return console.log('Edge already exists')