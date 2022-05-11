const IsSafeInteger = {
	type: 'numberIsSafeInteger',
	label: 'Number: Is Safe Integer',
	description: 'Returns true if the number is a safe integer.',
	initialWidth: 160,
	inputs: ports => [ports.number()],
	outputs: ports => [ports.boolean()],
}

export default IsSafeInteger
