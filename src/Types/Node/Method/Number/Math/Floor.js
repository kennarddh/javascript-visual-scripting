const Floor = {
	type: 'numberMathFloor',
	label: 'Number: Math: Floor',
	description:
		'Returns the largest integer less than or equal to a given number',
	initialWidth: 160,
	inputs: ports => [ports.number()],
	outputs: ports => [ports.number()],
}

export default Floor
