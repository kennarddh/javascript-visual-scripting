const Length = {
	type: 'stringLength',
	label: 'String: Length',
	description: 'Returns the length of a string.',
	initialWidth: 160,
	inputs: ports => [
		ports.string({
			name: 'string',
			label: 'String',
		}),
	],
	outputs: ports => [
		ports.number({
			name: 'length',
			label: 'Length',
		}),
	],
}

export default Length
