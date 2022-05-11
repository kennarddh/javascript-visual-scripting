const MinValue = {
	type: 'numberMinValue',
	label: 'Number: Min Value',
	description: 'Returns the minimum value.',
	initialWidth: 160,
	outputs: ports => [ports.number()],
}

export default MinValue
