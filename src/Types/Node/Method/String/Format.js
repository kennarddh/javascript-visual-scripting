const Format = {
	type: 'formatString',
	label: 'String: Format',
	description: 'Format a parameterized string',
	initialWidth: 230,
	inputs: ports => data => {
		const template = (data && data.template && data.template.string) || ''

		const re = /\{(.*?)\}/g

		let res
		let ids = []

		while ((res = re.exec(template)) !== null) {
			if (!ids.includes(res[1])) ids.push(res[1])
		}

		return [
			ports.string({
				name: 'template',
				label: 'Template',
				hidePort: true,
			}),
			...ids.map(id => ports.string({ name: id, label: id })),
		]
	},
	outputs: ports => [ports.string({ label: 'Message' })],
}

export default Format
