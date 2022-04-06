const Reverse = {
	type: 'reverseBoolean',
	label: 'Reverse Boolean',
	description: 'Reverses boolean value',
	initialWidth: 140,
	inputs: ports => [ports.boolean()],
	outputs: ports => [ports.boolean()],
}

export default Reverse
