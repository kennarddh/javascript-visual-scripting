import { FlumeConfig } from 'flume'

// PortType
import {
	DataTypes as DataTypesPort,
	ComparisonOperator as ComparisonOperatorPort,
} from 'Types/Port'

// NodeType
import { DataTypes as DataTypesNode, MethodNode, RootNode } from 'Types/Node'

const Config = new FlumeConfig()

// Port Config
Config.addPortType(ComparisonOperatorPort)

// DataTypes
Config.addPortType(DataTypesPort.String)
Config.addPortType(DataTypesPort.Number)
Config.addPortType(DataTypesPort.Boolean)
Config.addPortType(DataTypesPort.Color)

// Node Config
// DataTypes
Config.addNodeType(DataTypesNode.String)
Config.addNodeType(DataTypesNode.Number)
Config.addNodeType(DataTypesNode.Boolean)
Config.addNodeType(DataTypesNode.Color)

// Method
// String
Config.addNodeType(MethodNode.String.Join)
Config.addNodeType(MethodNode.String.Format)
Config.addNodeType(MethodNode.String.Switch)
Config.addNodeType(MethodNode.String.Includes)
Config.addNodeType(MethodNode.String.Comparison)
Config.addNodeType(MethodNode.String.Length)
Config.addNodeType(MethodNode.String.Uppercase)
Config.addNodeType(MethodNode.String.Lowercase)
Config.addNodeType(MethodNode.String.Replace)
Config.addNodeType(MethodNode.String.ReplaceAll)
Config.addNodeType(MethodNode.String.Trim)
Config.addNodeType(MethodNode.String.TrimStart)
Config.addNodeType(MethodNode.String.TrimEnd)

// Number
Config.addNodeType(MethodNode.Number.Switch)
Config.addNodeType(MethodNode.Number.Comparison)

// Math
Config.addNodeType(MethodNode.Number.Math.Absolute)
Config.addNodeType(MethodNode.Number.Math.PI)
Config.addNodeType(MethodNode.Number.Math.Ceil)
Config.addNodeType(MethodNode.Number.Math.Floor)
Config.addNodeType(MethodNode.Number.Math.Round)
Config.addNodeType(MethodNode.Number.Math.Clamp)
Config.addNodeType(MethodNode.Number.Math.SquareRoot)
Config.addNodeType(MethodNode.Number.Math.Random)

// Operation
Config.addNodeType(MethodNode.Number.Math.Operation.Addition)
Config.addNodeType(MethodNode.Number.Math.Operation.Subtraction)
Config.addNodeType(MethodNode.Number.Math.Operation.Multiplication)
Config.addNodeType(MethodNode.Number.Math.Operation.Division)
Config.addNodeType(MethodNode.Number.Math.Operation.Exponentiation)
Config.addNodeType(MethodNode.Number.Math.Operation.Modulus)

// Boolean
Config.addNodeType(MethodNode.Boolean.Not)
Config.addNodeType(MethodNode.Boolean.Or)
Config.addNodeType(MethodNode.Boolean.And)

// Datetime
Config.addNodeType(MethodNode.Datetime.Now)

// Convert
Config.addNodeType(MethodNode.Convert.NumberToString)
Config.addNodeType(MethodNode.Convert.BooleanToString)
Config.addNodeType(MethodNode.Convert.ColorToString)

// Root Node
Config.addRootNodeType(RootNode)

export default Config
