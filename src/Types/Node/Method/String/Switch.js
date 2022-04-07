const Switch = {
	type: 'stringSwitch',
	label: 'String: Switch',
	description: 'Switches between two strings',
	initialWidth: 160,
	inputs: ports => [
		ports.boolean(),
		ports.string({ name: 'stringIfTrue', label: 'String if true' }),
		ports.string({ name: 'stringIfFalse', label: 'String if false' }),
	],
	outputs: ports => [ports.string()],
}

export default Switch
