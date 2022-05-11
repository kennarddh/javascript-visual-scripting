const ResolveNodes = (node, inputValues) => {
	switch (node.type) {
		case 'string':
			return { string: inputValues.string }
		case 'number':
			return { number: inputValues.number }
		case 'boolean':
			return { boolean: inputValues.boolean }
		case 'color':
			return { color: inputValues.color }

		// Method
		// String
		case 'stringJoin':
			return {
				joinedText: [inputValues.string1, inputValues.string2].join(
					inputValues.separator
				),
			}
		case 'stringFormat':
			const { template, ...inputs } = inputValues
			const re = /\{(.*?)\}/g
			const message = template.replace(re, (_, key) => inputs[key])

			return { message }
		case 'stringSwitch':
			return {
				string: inputValues.boolean
					? inputValues.stringIfTrue
					: inputValues.stringIfFalse,
			}
		case 'stringIncludes':
			if (inputValues.caseSensitive)
				return {
					result: inputValues.string.includes(inputValues.substring),
				}

			return {
				result: inputValues.string
					.toLowerCase()
					.includes(inputValues.substring.toLowerCase()),
			}
		case 'stringComparison': {
			const operator = inputValues.operator
			const string1 = inputValues.string1
			const string2 = inputValues.string2

			switch (operator) {
				case '==':
					return {
						result: string1 == string2,
					}
				case '!=':
					return {
						result: string1 != string2,
					}
				case '>':
					return {
						result: string1 > string2,
					}
				case '>=':
					return {
						result: string1 >= string2,
					}
				case '<':
					return {
						result: string1 < string2,
					}
				case '<=':
					return {
						result: string1 <= string2,
					}
				default:
					return {
						result: false,
					}
			}
		}
		case 'stringLength':
			return {
				length: inputValues.string.length,
			}

		case 'stringUppercase':
			return {
				string: inputValues.string.toUpperCase(),
			}

		case 'stringLowercase':
			return {
				string: inputValues.string.toLowerCase(),
			}

		case 'stringReplace':
			return {
				string: inputValues.string.replace(
					inputValues.search,
					inputValues.replace
				),
			}

		case 'stringReplaceAll':
			return {
				string: inputValues.string.replaceAll(
					inputValues.search,
					inputValues.replace
				),
			}

		case 'stringTrim':
			return {
				string: inputValues.string.trim(),
			}

		case 'stringTrimStart':
			return {
				string: inputValues.string.trimStart(),
			}

		case 'stringTrimEnd':
			return {
				string: inputValues.string.trimEnd(),
			}

		// Number
		case 'numberSwitch':
			return {
				number: inputValues.boolean
					? inputValues.numberIfTrue
					: inputValues.numberIfFalse,
			}
		case 'numberComparison': {
			const operator = inputValues.operator
			const number1 = inputValues.number1
			const number2 = inputValues.number2

			switch (operator) {
				case '==':
					return {
						result: number1 == number2,
					}
				case '!=':
					return {
						result: number1 != number2,
					}
				case '>':
					return {
						result: number1 > number2,
					}
				case '>=':
					return {
						result: number1 >= number2,
					}
				case '<':
					return {
						result: number1 < number2,
					}
				case '<=':
					return {
						result: number1 <= number2,
					}
				default:
					return {
						result: false,
					}
			}
		}

		case 'numberIsSafeInteger':
			return {
				boolean: Number.isSafeInteger(inputValues.number),
			}

		case 'numberIsInteger':
			return {
				boolean: Number.isInteger(inputValues.number),
			}

		case 'numberIsFinite':
			return {
				boolean: Number.isFinite(inputValues.number),
			}

		case 'numberPositiveInfinity':
			return {
				number: Number.POSITIVE_INFINITY,
			}

		case 'numberNegativeInfinity':
			return {
				number: Number.NEGATIVE_INFINITY,
			}

		case 'numberMinValue':
			return {
				number: Number.MIN_VALUE,
			}

		case 'numberMinSafeInteger':
			return {
				number: Number.MIN_SAFE_INTEGER,
			}

		case 'numberMaxValue':
			return {
				number: Number.MAX_VALUE,
			}

		case 'numberMaxSafeInteger':
			return {
				number: Number.MAX_SAFE_INTEGER,
			}

		// Math
		case 'numberMathAbsolute':
			return { number: Math.abs(inputValues.number) }
		case 'numberMathPI':
			return { number: Math.PI }
		case 'numberMathCeil':
			return { number: Math.ceil(inputValues.number) }
		case 'numberMathFloor':
			return { number: Math.floor(inputValues.number) }
		case 'numberMathRound':
			return { number: Math.round(inputValues.number) }
		case 'numberMathClamp':
			return {
				number: Math.min(
					Math.max(inputValues.number, inputValues.min),
					inputValues.max
				),
			}
		case 'numberMathSquareRoot':
			return { number: Math.sqrt(inputValues.number) }
		case 'numberMathRandom':
			return { number: Math.random() }

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
		case 'booleanNot':
			return { boolean: !inputValues.boolean }
		case 'booleanAnd':
			return { boolean: inputValues.boolean1 && inputValues.boolean2 }
		case 'booleanOr':
			return { boolean: inputValues.boolean1 || inputValues.boolean2 }

		// Datetime
		case 'datetimeNow':
			const today = new Date()

			const date =
				today.getFullYear() +
				'-' +
				(today.getMonth() + 1) +
				'-' +
				today.getDate()

			const time =
				today.getHours() +
				':' +
				today.getMinutes() +
				':' +
				today.getSeconds()

			const datetime = date + ' ' + time

			return {
				datetime: datetime,
				date: date,
				time: time,
				timestamp: Date.now(),
				year: today.getFullYear(),
				month: today.getMonth() + 1,
				day: today.getDate(),
				hour: today.getHours(),
				minute: today.getMinutes(),
				second: today.getSeconds(),
				milliseconds: today.getMilliseconds(),
				monthName: today.toLocaleString('en-us', { month: 'long' }),
				dayName: today.toLocaleString('en-us', { weekday: 'long' }),
			}

		// Convert
		case 'numberToString':
			return { string: inputValues.number.toString() }
		case 'booleanToString':
			return { string: inputValues.boolean.toString() }
		case 'colorToString':
			return {
				string: `red: ${inputValues.color.red}, green: ${inputValues.color.green}, blue: ${inputValues.color.blue}`,
			}

		default:
			return inputValues
	}
}

export default ResolveNodes
