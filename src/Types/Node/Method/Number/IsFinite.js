const IsFinite = {
	type: 'numberIsFinite',
	label: 'Number: Is Finite',
	description: 'Returns true if the number is finite.',
	initialWidth: 160,
	inputs: ports => [ports.number()],
	outputs: ports => [ports.boolean()],
}

export default IsFinite
