import { Colors, Controls } from 'flume'

const ColorPort = {
	type: 'color',
	name: 'color',
	label: 'Color',
	color: Colors.purple,
	controls: [
		Controls.number({
			name: 'red',
			label: 'Red',
		}),
		Controls.number({
			name: 'green',
			label: 'Green',
		}),
		Controls.number({
			name: 'blue',
			label: 'Blue',
		}),
	],
}

export default ColorPort
