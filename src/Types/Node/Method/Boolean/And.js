const And = {
	type: 'booleanAnd',
	label: 'Boolean: And',
	description: 'Returns true if both inputs are true',
	initialWidth: 140,
	inputs: ports => [
		ports.boolean({ name: 'boolean1', label: 'Boolean 1' }),
		ports.boolean({ name: 'boolean2', label: 'Boolean 2' }),
	],
	outputs: ports => [ports.boolean()],
}

export default And
