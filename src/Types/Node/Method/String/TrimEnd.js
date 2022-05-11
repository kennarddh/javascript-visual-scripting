const TrimEnd = {
	type: 'stringTrimEnd',
	label: 'String: Trim End',
	description: 'Trim the end of a string.',
	initialWidth: 160,
	inputs: ports => [ports.string()],
	outputs: ports => [ports.string()],
}

export default TrimEnd
