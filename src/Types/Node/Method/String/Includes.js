const Includes = {
	type: 'stringIncludes',
	label: 'String: Includes',
	description: 'Returns true if the string includes the given substring.',
	initialWidth: 160,
	inputs: ports => [
		ports.boolean({
			name: 'caseSensitive',
			label: 'Case Sensitive',
		}),
		ports.string({
			name: 'string',
			label: 'String',
		}),
		ports.string({
			name: 'substring',
			label: 'Substring',
		}),
	],
	outputs: ports => [
		ports.boolean({
			name: 'result',
			label: 'Result',
		}),
	],
}

export default Includes
