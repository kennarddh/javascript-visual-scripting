const ResolvePorts = (portType, data) => {
	switch (portType) {
		case 'string':
			return data.string
		case 'boolean':
			return data.boolean
		case 'number':
			return data.number
		case 'color':
			return { red: data.red, green: data.green, blue: data.blue }
		case 'comparisonOperator':
			return data.operator
		default:
			return data
	}
}

export default ResolvePorts
