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

// Boolean
Config.addNodeType(Method.Boolean.ReverseBoolean)

// Root Node
Config.addRootNodeType(RootNode)

export default Config
