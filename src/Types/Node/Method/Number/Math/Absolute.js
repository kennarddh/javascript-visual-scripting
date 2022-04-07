const Absolute = {
	type: 'numberMathAbsolute',
	label: 'Number: Math: Absolute',
	description: 'Calculate the absolute value of a number',
	initialWidth: 160,
	inputs: ports => [ports.number()],
	outputs: ports => [ports.number()],
}

export default Absolute
