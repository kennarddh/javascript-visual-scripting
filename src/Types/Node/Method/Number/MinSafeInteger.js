const MinSafeInteger = {
	type: 'numberMinSafeInteger',
	label: 'Number: Min Safe Integer',
	description: 'Returns the minimum safe integer.',
	initialWidth: 160,
	outputs: ports => [ports.number()],
}

export default MinSafeInteger
