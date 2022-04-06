import { Colors, Controls } from 'flume'

const StringPort = {
	type: 'string',
	name: 'string',
	label: 'String',
	color: Colors.green,
	controls: [
		Controls.text({
			name: 'string',
			label: 'String',
		}),
	],
}

export default StringPort
