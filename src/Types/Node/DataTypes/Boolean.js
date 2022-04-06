const BooleanNode = {
	type: 'boolean',
	label: 'Boolean',
	description: 'Outputs a boolean',
	initialWidth: 140,
	inputs: ports => [ports.boolean()],
	outputs: ports => [ports.boolean()],
}

export default BooleanNode
