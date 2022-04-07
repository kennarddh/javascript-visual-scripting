// DataTypes
import StringNode from './DataTypes/String'
import NumberNode from './DataTypes/Number'
import BooleanNode from './DataTypes/Boolean'
import RootNode from './Root'

// Method
// String
import JoinString from './Method/String/Join'
import FormatString from './Method/String/Format'

// Number
// Math
import NumberMathAbsolute from './Method/Number/Math/Absolute'

// Operation
import NumberMathAddition from './Method/Number/Math/Operation/Addition'
import NumberMathSubtraction from './Method/Number/Math/Operation/Subtraction'
import NumberMathMultiplication from './Method/Number/Math/Operation/Multiplication'
import NumberMathDivision from './Method/Number/Math/Operation/Division'
import NumberMathExponentiation from './Method/Number/Math/Operation/Exponentiation'
import NumberMathModulus from './Method/Number/Math/Operation/Modulus'

// Boolean
import ReverseBoolean from './Method/Boolean/Reverse'

// Convert
import NumberToString from './Method/Convert/NumberToString'
import BooleanToString from './Method/Convert/BooleanToString'

export const DataTypes = { StringNode, NumberNode, BooleanNode }

export const Method = {
	String: { JoinString, FormatString },
	Number: {
		Math: {
			Operation: {
				NumberMathAddition,
				NumberMathSubtraction,
				NumberMathMultiplication,
				NumberMathDivision,
				NumberMathExponentiation,
				NumberMathModulus,
			},
			NumberMathAbsolute,
		},
	},
	Boolean: { ReverseBoolean },
	Convert: { NumberToString, BooleanToString },
}

export { RootNode }
