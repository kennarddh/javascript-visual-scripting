const Reverse = {
	type: 'reverseBoolean',
	label: 'Boolean: Reverse',
	description: 'Reverses boolean value',
	initialWidth: 140,
	inputs: ports => [ports.boolean()],
	outputs: ports => [ports.boolean()],
}

export default Reverse
