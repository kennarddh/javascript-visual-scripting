const ColorNode = {
	type: 'color',
	label: 'Color',
	description: 'A color node',
	initialWidth: 140,
	inputs: ports => [ports.color()],
	outputs: ports => [ports.color()],
}

export default ColorNode
