const Ceil = {
	type: 'numberMathCeil',
	label: 'Number: Math: Ceil',
	description:
		'Returns the smallest integer greater than or equal to a given number',
	initialWidth: 160,
	inputs: ports => [ports.number()],
	outputs: ports => [ports.number()],
}

export default Ceil
