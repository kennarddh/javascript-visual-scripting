const SquareRoot = {
	type: 'numberMathSquareRoot',
	label: 'Number: Math: Square Root',
	description: 'Returns the square root of a number',
	initialWidth: 160,
	inputs: ports => [ports.number()],
	outputs: ports => [ports.number()],
}

export default SquareRoot
