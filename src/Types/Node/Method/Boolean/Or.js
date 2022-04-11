const And = {
	type: 'booleanOr',
	label: 'Boolean: Or',
	description: 'Returns true if either input is true',
	initialWidth: 140,
	inputs: ports => [
		ports.boolean({ name: 'boolean1', label: 'Boolean 1' }),
		ports.boolean({ name: 'boolean2', label: 'Boolean 2' }),
	],
	outputs: ports => [ports.boolean()],
}

export default And
