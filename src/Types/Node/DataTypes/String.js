const StringNode = {
	type: 'string',
	label: 'String',
	description: 'Outputs a string',
	inputs: ports => [ports.string()],
	outputs: ports => [ports.string()],
}

export default StringNode
