const NegativeInfinity = {
	type: 'numberNegativeInfinity',
	label: 'Number: Negative Infinity',
	description: 'Returns the negative infinity.',
	initialWidth: 160,
	outputs: ports => [ports.number()],
}

export default NegativeInfinity
