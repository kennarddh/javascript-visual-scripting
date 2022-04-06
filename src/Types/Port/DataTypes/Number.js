import { Colors, Controls } from 'flume'

const NumberPort = {
	type: 'number',
	name: 'number',
	label: 'Number',
	color: Colors.red,
	controls: [
		Controls.number({
			name: 'number',
			label: 'Number',
		}),
	],
}

export default NumberPort
