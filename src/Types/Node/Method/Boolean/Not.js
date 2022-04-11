const Not = {
	type: 'booleanNot',
	label: 'Boolean: Not',
	description: 'Returns true if input is false',
	initialWidth: 140,
	inputs: ports => [ports.boolean()],
	outputs: ports => [ports.boolean()],
}

export default Not
