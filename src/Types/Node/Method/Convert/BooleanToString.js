const BooleanToString = {
	type: 'booleanToString',
	label: 'Boolean: Convert: To String',
	description: 'Convert a boolean to a string',
	initialWidth: 160,
	inputs: ports => [ports.boolean({ name: 'boolean', label: 'Boolean' })],
	outputs: ports => [ports.string({ name: 'string', label: 'String' })],
}

export default BooleanToString
