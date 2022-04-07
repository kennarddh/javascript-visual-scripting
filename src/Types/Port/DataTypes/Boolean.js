import { Colors, Controls } from 'flume'

const BooleanPort = {
	type: 'boolean',
	name: 'boolean',
	label: 'Boolean',
	color: Colors.blue,
	controls: [
		Controls.checkbox({
			name: 'boolean',
			label: 'Boolean',
		}),
	],
}

export default BooleanPort
