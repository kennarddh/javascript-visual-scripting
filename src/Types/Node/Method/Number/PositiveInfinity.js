const PositiveInfinity = {
	type: 'numberPositiveInfinity',
	label: 'Number: Positive Infinity',
	description: 'Returns the positive infinity.',
	initialWidth: 160,
	outputs: ports => [ports.number()],
}

export default PositiveInfinity
