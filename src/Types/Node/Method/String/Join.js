const Join = {
	type: 'stringJoin',
	label: 'String: Join',
	description: 'Combines strings into one string',
	initialWidth: 160,
	inputs: ports => [
		ports.string({
			name: 'separator',
			label: 'Separator',
		}),
		ports.string({
			name: 'string1',
			label: 'First String',
		}),
		ports.string({
			name: 'string2',
			label: 'Second String',
		}),
	],
	outputs: ports => [
		ports.string({
			name: 'joinedText',
			label: 'Joined String',
		}),
	],
}

export default Join
