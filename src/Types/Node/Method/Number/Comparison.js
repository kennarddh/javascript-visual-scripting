const Comparison = {
	type: 'numberComparison',
	label: 'Number: Comparison',
	description: 'Compares two numbers',
	initialWidth: 160,
	inputs: ports => [
		ports.number({ name: 'number1', label: 'Number 1' }),
		ports.comparisonOperator({ name: 'operator', hidePort: true }),
		ports.number({ name: 'number2', label: 'Number 2' }),
	],
	outputs: ports => [ports.boolean({ name: 'result', label: 'Result' })],
}

export default Comparison
