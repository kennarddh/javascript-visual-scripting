const DefaultNodes = {
	'1Yu8O6kFOa': {
		x: 101.64711626838235,
		y: -136.3529196346508,
		type: 'output',
		width: 170,
		connections: {
			inputs: { output1: [{ nodeId: 'aEZ_v1mVAt', portName: 'string' }] },
			outputs: {},
		},
		inputData: { count: { number: 1 } },
		root: true,
		id: '1Yu8O6kFOa',
	},
	aEZ_v1mVAt: {
		id: 'aEZ_v1mVAt',
		x: -97.94114774816185,
		y: -126.7352869370405,
		type: 'numberToString',
		width: 160,
		connections: {
			inputs: { number: [{ nodeId: 'LH2rY56gSl', portName: 'number' }] },
			outputs: {
				string: [{ nodeId: '1Yu8O6kFOa', portName: 'output1' }],
			},
		},
		inputData: { number: { number: 0 } },
	},
	M3r4LKgZ3e: {
		id: 'M3r4LKgZ3e',
		x: -571.6469511144303,
		y: -206.49996050666368,
		type: 'numberMathOperationAddition',
		width: 160,
		connections: {
			inputs: {
				number1: [{ nodeId: 'ez86aJVKLf', portName: 'number' }],
				number2: [{ nodeId: '0zcijzUH7J', portName: 'number' }],
			},
			outputs: {
				number: [{ nodeId: 'LH2rY56gSl', portName: 'number1' }],
			},
		},
		inputData: { number1: { number: 0 }, number2: { number: 0 } },
	},
	ez86aJVKLf: {
		id: 'ez86aJVKLf',
		x: -790.2350643382356,
		y: -315.20581772748176,
		type: 'number',
		width: 160,
		connections: {
			inputs: {},
			outputs: {
				number: [{ nodeId: 'M3r4LKgZ3e', portName: 'number1' }],
			},
		},
		inputData: { number: { number: 10 } },
	},
	'0zcijzUH7J': {
		id: '0zcijzUH7J',
		x: -787.9410759420958,
		y: -180.73526180491734,
		type: 'number',
		width: 160,
		connections: {
			inputs: {},
			outputs: {
				number: [{ nodeId: 'M3r4LKgZ3e', portName: 'number2' }],
			},
		},
		inputData: { number: { number: 10 } },
	},
	LH2rY56gSl: {
		id: 'LH2rY56gSl',
		x: -295.5293615004597,
		y: -146.49996050666368,
		type: 'numberMathOperationDivision',
		width: 160,
		connections: {
			inputs: {
				number2: [{ nodeId: 'rNQFQPFkOX', portName: 'number' }],
				number1: [{ nodeId: 'M3r4LKgZ3e', portName: 'number' }],
			},
			outputs: { number: [{ nodeId: 'aEZ_v1mVAt', portName: 'number' }] },
		},
		inputData: { number1: { number: 0 }, number2: { number: 0 } },
	},
	rNQFQPFkOX: {
		id: 'rNQFQPFkOX',
		x: -567.0587230009193,
		y: -39.79411764705886,
		type: 'number',
		width: 160,
		connections: {
			inputs: {},
			outputs: {
				number: [{ nodeId: 'LH2rY56gSl', portName: 'number2' }],
			},
		},
		inputData: { number: { number: 2 } },
	},
}

export default DefaultNodes
