const Random = {
	type: 'numberMathRandom',
	label: 'Number: Math: Random',
	description: 'Returns a random number between 0 and 1.',
	initialWidth: 160,
	outputs: ports => [ports.number()],
}

export default Random
