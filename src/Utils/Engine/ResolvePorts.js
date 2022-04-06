const ResolvePorts = (portType, data) => {
	switch (portType) {
		case 'string':
			return data.string
		case 'boolean':
			return data.boolean
		case 'number':
			return data.number
		default:
			return data
	}
}

export default ResolvePorts
