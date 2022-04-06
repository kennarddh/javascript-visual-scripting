// DataTypes
import StringNode from './DataTypes/String'
import NumberNode from './DataTypes/Number'
import BooleanNode from './DataTypes/Boolean'
import RootNode from './Root'

// Method
// String
import JoinString from './Method/String/Join'
import FormatString from './Method/String/Format'

// Boolean
import ReverseBoolean from './Method/Boolean/Reverse'

export const DataTypes = { StringNode, NumberNode, BooleanNode }

export const Method = {
	String: { JoinString, FormatString },
	Boolean: { ReverseBoolean },
}

export { RootNode }
