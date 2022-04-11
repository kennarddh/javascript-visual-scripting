import { Colors, Controls } from 'flume'

const ComparisonOperator = {
	type: 'comparisonOperator',
	name: 'comparisonOperator',
	label: 'Comparison Operator',
	color: Colors.pink,
	controls: [
		Controls.select({
			name: 'operator',
			label: 'Operator',
			options: [
				{ label: 'Equal', value: '==' },
				{ label: 'Not Equal', value: '!=' },
				{ label: 'Greater Than', value: '>' },
				{ label: 'Greater Than or Equal', value: '>=' },
				{ label: 'Less Than', value: '<' },
				{ label: 'Less Than or Equal', value: '<=' },
			],
		}),
	],
}

export default ComparisonOperator
