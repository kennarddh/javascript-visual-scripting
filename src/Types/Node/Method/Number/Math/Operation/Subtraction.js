const Subtraction = {
	type: 'numberMathOperationSubtraction',
	label: 'Number: Math: Operation: Subtraction',
	description: 'Subtract two numbers',
	initialWidth: 160,
	inputs: ports => [
		ports.number({ name: 'number1', label: 'Number 1' }),
		ports.number({ name: 'number2', label: 'Number 2' }),
	],
	outputs: ports => [ports.number({ name: 'number', label: 'Number' })],
}

export default Subtraction
