export const CreateSourceOrTargetObject = dataArray => {
	const result = {}

	dataArray.forEach(element => {
		result[element] = {
			id: element,
			connection: {},
		}
	})

	return result
}