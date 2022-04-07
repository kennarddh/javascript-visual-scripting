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
import NumberMathPI from './Method/Number/Math/PI'
import NumberMathCeil from './Method/Number/Math/Ceil'
import NumberMathFloor from './Method/Number/Math/Floor'
import NumberMathClamp from './Method/Number/Math/Clamp'

// Operation
import NumberMathOperationAddition from './Method/Number/Math/Operation/Addition'
import NumberMathOperationSubtraction from './Method/Number/Math/Operation/Subtraction'
import NumberMathOperationMultiplication from './Method/Number/Math/Operation/Multiplication'
import NumberMathOperationDivision from './Method/Number/Math/Operation/Division'
import NumberMathOperationExponentiation from './Method/Number/Math/Operation/Exponentiation'
import NumberMathOperationModulus from './Method/Number/Math/Operation/Modulus'

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
				NumberMathOperationAddition,
				NumberMathOperationSubtraction,
				NumberMathOperationMultiplication,
				NumberMathOperationDivision,
				NumberMathOperationExponentiation,
				NumberMathOperationModulus,
			},
			NumberMathAbsolute,
			NumberMathPI,
			NumberMathCeil,
			NumberMathFloor,
			NumberMathClamp,
		},
	},
	Boolean: { ReverseBoolean },
	Convert: { NumberToString, BooleanToString },
}

export { RootNode }
