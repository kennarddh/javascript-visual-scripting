const Replace = {
	type: 'stringReplace',
	label: 'String: Replace',
	description: 'Replace a substring with another substring.',
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

export default Replace
