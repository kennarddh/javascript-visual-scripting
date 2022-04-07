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

// Operation
Config.addNodeType(Method.Number.Math.Operation.NumberMathAddition)
Config.addNodeType(Method.Number.Math.Operation.NumberMathSubtraction)
Config.addNodeType(Method.Number.Math.Operation.NumberMathMultiplication)
Config.addNodeType(Method.Number.Math.Operation.NumberMathDivision)
Config.addNodeType(Method.Number.Math.Operation.NumberMathExponentiation)
Config.addNodeType(Method.Number.Math.Operation.NumberMathModulus)

// Boolean
Config.addNodeType(Method.Boolean.ReverseBoolean)

// Convert
Config.addNodeType(Method.Convert.NumberToString)
Config.addNodeType(Method.Convert.BooleanToString)

// Root Node
Config.addRootNodeType(RootNode)

export default Config
