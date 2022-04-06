const ResolveNodes = (node, inputValues, nodeType, context) => {
	switch (node.type) {
		case 'string':
			return { string: inputValues.string }
		case 'number':
			return { number: inputValues.number }
		case 'boolean':
			return { boolean: inputValues.boolean }
		case 'joinString':
			return {
				joinedText: [inputValues.string1, inputValues.string2].join(
					inputValues.separator
				),
			}
		case 'formatString':
			const { template, ...inputs } = inputValues
			const re = /\{(.*?)\}/g
			const message = template.replace(re, (_, key) => inputs[key])

			return { message }
		case 'reverseBoolean':
			return { boolean: !inputValues.boolean }
		default:
			return inputValues
	}
}

export default ResolveNodes
