const Clamp = {
	type: 'numberMathClamp',
	label: 'Number: Math: Clamp',
	description:
		'Returns the value of a number clamped between a minimum and a maximum value',
	initialWidth: 160,
	inputs: ports => [
		ports.number({
			name: 'number',
			label: 'Number',
		}),
		ports.number({
			name: 'min',
			label: 'Min',
		}),
		ports.number({
			name: 'max',
			label: 'Max',
		}),
	],
	outputs: ports => [ports.number()],
}

export default Clamp
