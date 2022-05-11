const TrimStart = {
	type: 'stringTrimStart',
	label: 'String: Trim Start',
	description: 'Trim the start of a string.',
	initialWidth: 160,
	inputs: ports => [ports.string()],
	outputs: ports => [ports.string()],
}

export default TrimStart
