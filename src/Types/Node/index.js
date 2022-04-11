import RootNode from './Root'

// DataTypes
import StringNode from './DataTypes/String'
import NumberNode from './DataTypes/Number'
import BooleanNode from './DataTypes/Boolean'
import ColorNode from './DataTypes/Color'

// Method
// String
import StringJoin from './Method/String/Join'
import StringFormat from './Method/String/Format'
import StringSwitch from './Method/String/Switch'
import StringIncludes from './Method/String/Includes'

// Number
import NumberSwitch from './Method/Number/Switch'
import NumberComparison from './Method/Number/Comparison'

// Math
import NumberMathAbsolute from './Method/Number/Math/Absolute'
import NumberMathPI from './Method/Number/Math/PI'
import NumberMathCeil from './Method/Number/Math/Ceil'
import NumberMathFloor from './Method/Number/Math/Floor'
import NumberMathRound from './Method/Number/Math/Round'
import NumberMathClamp from './Method/Number/Math/Clamp'
import NumberMathSquareRoot from './Method/Number/Math/SquareRoot'
import NumberMathRandom from './Method/Number/Math/Random'

// Operation
import NumberMathOperationAddition from './Method/Number/Math/Operation/Addition'
import NumberMathOperationSubtraction from './Method/Number/Math/Operation/Subtraction'
import NumberMathOperationMultiplication from './Method/Number/Math/Operation/Multiplication'
import NumberMathOperationDivision from './Method/Number/Math/Operation/Division'
import NumberMathOperationExponentiation from './Method/Number/Math/Operation/Exponentiation'
import NumberMathOperationModulus from './Method/Number/Math/Operation/Modulus'

// Boolean
import BooleanNot from './Method/Boolean/Not'
import BooleanOr from './Method/Boolean/Or'
import BooleanAnd from './Method/Boolean/And'

// Datetime
import DatetimeNow from './Datetime/Now'

// Convert
import NumberToString from './Method/Convert/NumberToString'
import BooleanToString from './Method/Convert/BooleanToString'
import ColorToString from './Method/Convert/ColorToString'

export const DataTypes = {
	String: StringNode,
	Number: NumberNode,
	Boolean: BooleanNode,
	Color: ColorNode,
}

export const MethodNode = {
	String: {
		Join: StringJoin,
		Format: StringFormat,
		Switch: StringSwitch,
		Includes: StringIncludes,
	},
	Number: {
		Math: {
			Operation: {
				Addition: NumberMathOperationAddition,
				Subtraction: NumberMathOperationSubtraction,
				Multiplication: NumberMathOperationMultiplication,
				Division: NumberMathOperationDivision,
				Exponentiation: NumberMathOperationExponentiation,
				Modulus: NumberMathOperationModulus,
			},
			Absolute: NumberMathAbsolute,
			PI: NumberMathPI,
			Ceil: NumberMathCeil,
			Floor: NumberMathFloor,
			Clamp: NumberMathClamp,
			Round: NumberMathRound,
			SquareRoot: NumberMathSquareRoot,
			Random: NumberMathRandom,
		},
		Switch: NumberSwitch,
		Comparison: NumberComparison,
	},
	Boolean: { Not: BooleanNot, Or: BooleanOr, And: BooleanAnd },
	Datetime: { Now: DatetimeNow },
	Convert: { NumberToString, BooleanToString, ColorToString },
}

export { RootNode }
