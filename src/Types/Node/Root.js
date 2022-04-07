const RootNode = {
	type: 'output',
	label: 'Output',
	initialWidth: 170,
	inputs: ports => data => {
		const input = [
			ports.number({
				name: 'count',
				label: 'Output Count (Max 100)',
				hidePort: true,
			}),
		]

		if (data.count) {
			for (let i = 1; i < data.count.number + 1; i++) {
				input.push(
					ports.string({
						name: `output${i}`,
						label: `Output ${i}`,
					})
				)

				if (i >= 100) break
			}
		}

		return input
	},
}

export default RootNode
