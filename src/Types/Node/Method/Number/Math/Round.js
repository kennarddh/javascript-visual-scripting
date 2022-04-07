const Round = {
	type: 'numberMathRound',
	label: 'Number: Math: Round',
	description: 'Returns the value of a number rounded to the nearest integer',
	initialWidth: 160,
	inputs: ports => [ports.number()],
	outputs: ports => [ports.number()],
}

export default Round
