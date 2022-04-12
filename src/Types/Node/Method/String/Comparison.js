const Comparison = {
	type: 'stringComparison',
	label: 'String: Comparison',
	description: 'Compares two strings',
	initialWidth: 160,
	inputs: ports => [
		ports.string({ name: 'string1', label: 'String 1' }),
		ports.comparisonOperator({ name: 'operator', hidePort: true }),
		ports.string({ name: 'string2', label: 'String 2' }),
	],
	outputs: ports => [ports.boolean({ name: 'result', label: 'Result' })],
}

export default Comparison
