const MaxSafeInteger = {
	type: 'numberMaxSafeInteger',
	label: 'Number: Max Safe Integer',
	description: 'Returns the maximum safe integer.',
	initialWidth: 160,
	outputs: ports => [ports.number()],
}

export default MaxSafeInteger
