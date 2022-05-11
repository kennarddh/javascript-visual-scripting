const Trim = {
	type: 'stringTrim',
	label: 'String: Trim',
	description: 'Trims whitespace from the beginning and end of a string.',
	initialWidth: 160,
	inputs: ports => [ports.string()],
	outputs: ports => [ports.string()],
}

export default Trim
