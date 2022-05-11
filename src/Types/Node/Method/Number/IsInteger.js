const IsInteger = {
	type: 'numberIsInteger',
	label: 'Number: Is Integer',
	description: 'Returns true if the number is an integer.',
	initialWidth: 160,
	inputs: ports => [ports.number()],
	outputs: ports => [ports.boolean()],
}

export default IsInteger
