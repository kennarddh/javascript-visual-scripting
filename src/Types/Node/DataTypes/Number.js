const NumberNode = {
	type: 'number',
	label: 'Number',
	description: 'Outputs a numeric value',
	initialWidth: 160,
	inputs: ports => [ports.number()],
	outputs: ports => [ports.number()],
}

export default NumberNode
