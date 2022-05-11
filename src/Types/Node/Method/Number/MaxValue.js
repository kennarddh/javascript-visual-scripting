const MaxValue = {
	type: 'numberMaxValue',
	label: 'Number: Max Value',
	description: 'Returns the maximum value.',
	initialWidth: 160,
	outputs: ports => [ports.number()],
}

export default MaxValue
