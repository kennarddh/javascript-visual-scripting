const Join = {
	type: 'joinString',
	label: 'Join String',
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
			name: 'joinedString',
			label: 'Joined String',
		}),
	],
}

export default Join
