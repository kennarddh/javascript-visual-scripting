const Switch = {
	type: 'numberSwitch',
	label: 'Number: Switch',
	description: 'Switches between two numbers',
	initialWidth: 160,
	inputs: ports => [
		ports.boolean(),
		ports.number({ name: 'numberIfTrue', label: 'Number if true' }),
		ports.number({ name: 'numberIfFalse', label: 'Number if false' }),
	],
	outputs: ports => [ports.number()],
}

export default Switch
