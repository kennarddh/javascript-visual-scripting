import { FlumeConfig } from 'flume'

// PortType
import { DataTypes as DataTypesPort } from 'Types/Port'

// NodeType
import { DataTypes as DataTypesNode, MethodNode, RootNode } from 'Types/Node'

const Config = new FlumeConfig()

// Port Config
Config.addPortType(DataTypesPort.ColorPort)

// DataTypes
Config.addPortType(DataTypesPort.StringPort)
Config.addPortType(DataTypesPort.NumberPort)
Config.addPortType(DataTypesPort.BooleanPort)

// Node Config
// DataTypes
Config.addNodeType(DataTypesNode.StringNode)
Config.addNodeType(DataTypesNode.NumberNode)
Config.addNodeType(DataTypesNode.BooleanNode)
Config.addNodeType(DataTypesNode.ColorNode)

// Method
// String
Config.addNodeType(MethodNode.String.JoinString)
Config.addNodeType(MethodNode.String.FormatString)
Config.addNodeType(MethodNode.String.StringSwitch)

// Number
Config.addNodeType(MethodNode.Number.NumberSwitch)

// Math
Config.addNodeType(MethodNode.Number.Math.NumberMathAbsolute)
Config.addNodeType(MethodNode.Number.Math.NumberMathPI)
Config.addNodeType(MethodNode.Number.Math.NumberMathCeil)
Config.addNodeType(MethodNode.Number.Math.NumberMathFloor)
Config.addNodeType(MethodNode.Number.Math.NumberMathRound)
Config.addNodeType(MethodNode.Number.Math.NumberMathClamp)
Config.addNodeType(MethodNode.Number.Math.NumberMathSquareRoot)

// Operation
Config.addNodeType(MethodNode.Number.Math.Operation.NumberMathOperationAddition)
Config.addNodeType(
	MethodNode.Number.Math.Operation.NumberMathOperationSubtraction
)
Config.addNodeType(
	MethodNode.Number.Math.Operation.NumberMathOperationMultiplication
)
Config.addNodeType(MethodNode.Number.Math.Operation.NumberMathOperationDivision)
Config.addNodeType(
	MethodNode.Number.Math.Operation.NumberMathOperationExponentiation
)
Config.addNodeType(MethodNode.Number.Math.Operation.NumberMathOperationModulus)

// Boolean
Config.addNodeType(MethodNode.Boolean.ReverseBoolean)

// Datetime
Config.addNodeType(MethodNode.Datetime.DatetimeNow)

// Convert
Config.addNodeType(MethodNode.Convert.NumberToString)
Config.addNodeType(MethodNode.Convert.BooleanToString)
Config.addNodeType(MethodNode.Convert.ColorToString)

// Root Node
Config.addRootNodeType(RootNode)

export default Config
