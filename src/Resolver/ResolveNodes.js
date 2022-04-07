const ResolveNodes = (node, inputValues) => {
	switch (node.type) {
		case 'string':
			return { string: inputValues.string }
		case 'number':
			return { number: inputValues.number }
		case 'boolean':
			return { boolean: inputValues.boolean }

		// Method
		// String
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

		// Number
		// Math
		case 'numberMathAbsolute':
			return { number: Math.abs(inputValues.number) }

		// Operation
		case 'numberMathOperationAddition':
			return { number: inputValues.number1 + inputValues.number2 }
		case 'numberMathOperationSubtraction':
			return { number: inputValues.number1 - inputValues.number2 }
		case 'numberMathOperationMultiplication':
			return { number: inputValues.number1 * inputValues.number2 }
		case 'numberMathOperationDivision':
			return { number: inputValues.number1 / inputValues.number2 }
		case 'numberMathOperationModulus':
			return { number: inputValues.number1 % inputValues.number2 }
		case 'numberMathOperationExponentiation':
			return { number: inputValues.number1 ** inputValues.number2 }

		// Boolean
		case 'reverseBoolean':
			return { boolean: !inputValues.boolean }

		// Convert
		case 'numberToString':
			return { string: inputValues.number.toString() }
		case 'booleanToString':
			return { string: inputValues.boolean.toString() }

		default:
			return inputValues
	}
}

export default ResolveNodes
