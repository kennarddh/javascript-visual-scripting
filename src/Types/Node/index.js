import RootNode from './Root'

// DataTypes
import StringNode from './DataTypes/String'
import NumberNode from './DataTypes/Number'
import BooleanNode from './DataTypes/Boolean'
import ColorNode from './DataTypes/Color'

// Method
// String
import JoinString from './Method/String/Join'
import FormatString from './Method/String/Format'
import StringSwitch from './Method/String/Switch'

// Number
import NumberSwitch from './Method/Number/Switch'

// Math
import NumberMathAbsolute from './Method/Number/Math/Absolute'
import NumberMathPI from './Method/Number/Math/PI'
import NumberMathCeil from './Method/Number/Math/Ceil'
import NumberMathFloor from './Method/Number/Math/Floor'
import NumberMathRound from './Method/Number/Math/Round'
import NumberMathClamp from './Method/Number/Math/Clamp'
import NumberMathSquareRoot from './Method/Number/Math/SquareRoot'

// Operation
import NumberMathOperationAddition from './Method/Number/Math/Operation/Addition'
import NumberMathOperationSubtraction from './Method/Number/Math/Operation/Subtraction'
import NumberMathOperationMultiplication from './Method/Number/Math/Operation/Multiplication'
import NumberMathOperationDivision from './Method/Number/Math/Operation/Division'
import NumberMathOperationExponentiation from './Method/Number/Math/Operation/Exponentiation'
import NumberMathOperationModulus from './Method/Number/Math/Operation/Modulus'

// Boolean
import ReverseBoolean from './Method/Boolean/Reverse'

// Datetime
import DatetimeNow from './Datetime/Now'

// Convert
import NumberToString from './Method/Convert/NumberToString'
import BooleanToString from './Method/Convert/BooleanToString'
import ColorToString from './Method/Convert/ColorToString'

export const DataTypes = {
	StringNode,
	NumberNode,
	BooleanNode,
	ColorNode,
}

export const MethodNode = {
	String: { JoinString, FormatString, StringSwitch },
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
			NumberMathRound,
			NumberMathSquareRoot,
		},
		NumberSwitch,
	},
	Boolean: { ReverseBoolean },
	Datetime: { DatetimeNow },
	Convert: { NumberToString, BooleanToString, ColorToString },
}

export { RootNode }
