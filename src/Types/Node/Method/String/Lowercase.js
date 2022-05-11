const Lowercase = {
	type: 'stringLowercase',
	label: 'String: Lowercase',
	description: 'Converts a string to lowercase.',
	initialWidth: 160,
	inputs: ports => [ports.string()],
	outputs: ports => [ports.string()],
}

export default Lowercase
