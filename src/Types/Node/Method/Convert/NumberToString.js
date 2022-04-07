const NumberToString = {
	type: 'numberToString',
	label: 'Number: Convert: To String',
	description: 'Convert a number to a string',
	initialWidth: 160,
	inputs: ports => [ports.number({ name: 'number', label: 'Number' })],
	outputs: ports => [ports.string({ name: 'string', label: 'String' })],
}

export default NumberToString
