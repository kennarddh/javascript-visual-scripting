import { FlumeConfig } from 'flume'

// PortType
import { DataTypes as DataTypesPort } from 'Types/Port'

// NodeType
import { DataTypes as DataTypesNode, Method, RootNode } from 'Types/Node'

const Config = new FlumeConfig()

// Port Config
// DataTypes
Config.addPortType(DataTypesPort.StringPort)
Config.addPortType(DataTypesPort.NumberPort)
Config.addPortType(DataTypesPort.BooleanPort)

// Node Config
// DataTypes
Config.addNodeType(DataTypesNode.StringNode)
Config.addNodeType(DataTypesNode.NumberNode)
Config.addNodeType(DataTypesNode.BooleanNode)

// Method
// String
Config.addNodeType(Method.String.JoinString)
Config.addNodeType(Method.String.FormatString)

// Number
// Math
Config.addNodeType(Method.Number.Math.NumberMathAbsolute)
Config.addNodeType(Method.Number.Math.NumberMathPI)
Config.addNodeType(Method.Number.Math.NumberMathCeil)
Config.addNodeType(Method.Number.Math.NumberMathFloor)
Config.addNodeType(Method.Number.Math.NumberMathRound)
Config.addNodeType(Method.Number.Math.NumberMathClamp)
Config.addNodeType(Method.Number.Math.NumberMathSquareRoot)

// Operation
Config.addNodeType(Method.Number.Math.Operation.NumberMathOperationAddition)
Config.addNodeType(Method.Number.Math.Operation.NumberMathOperationSubtraction)
Config.addNodeType(
	Method.Number.Math.Operation.NumberMathOperationMultiplication
)
Config.addNodeType(Method.Number.Math.Operation.NumberMathOperationDivision)
Config.addNodeType(
	Method.Number.Math.Operation.NumberMathOperationExponentiation
)
Config.addNodeType(Method.Number.Math.Operation.NumberMathOperationModulus)

// Boolean
Config.addNodeType(Method.Boolean.ReverseBoolean)

// Convert
Config.addNodeType(Method.Convert.NumberToString)
Config.addNodeType(Method.Convert.BooleanToString)

// Root Node
Config.addRootNodeType(RootNode)

export default Config
