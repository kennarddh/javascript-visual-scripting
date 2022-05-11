const ReplaceAll = {
	type: 'stringReplaceAll',
	label: 'String: Replace All',
	description:
		'Replace all occurrences of a substring with another substring.',
	initialWidth: 160,
	inputs: ports => [
		ports.string({
			name: 'string',
			label: 'String',
		}),
		ports.string({
			name: 'replace',
			label: 'Replace',
		}),
		ports.string({
			name: 'search',
			label: 'Search',
		}),
	],
	outputs: ports => [
		ports.string({
			name: 'string',
			label: 'String',
		}),
	],
}

export default ReplaceAll
