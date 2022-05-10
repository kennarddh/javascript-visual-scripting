const Uppercase = {
	type: 'stringUppercase',
	label: 'String: Uppercase',
	description: 'Converts a string to uppercase.',
	initialWidth: 160,
	inputs: ports => [ports.string()],
	outputs: ports => [ports.string()],
}

export default Uppercase
