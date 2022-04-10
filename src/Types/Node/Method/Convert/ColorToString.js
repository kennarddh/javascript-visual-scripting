const ColorToString = {
	type: 'colorToString',
	label: 'Color: Convert: To String',
	description: 'Convert a color to a string',
	initialWidth: 160,
	inputs: ports => [ports.color({ name: 'color', label: 'Color' })],
	outputs: ports => [ports.string({ name: 'string', label: 'String' })],
}

export default ColorToString
