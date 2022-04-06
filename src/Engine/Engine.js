import { RootEngine } from 'flume'

// Config
import Config from 'Config/Config'

// Utils
// Engine
import ResolvePorts from 'Utils/Engine/ResolvePorts'
import ResolveNodes from 'Utils/Engine/ResolveNodes'

const Engine = new RootEngine(Config, ResolvePorts, ResolveNodes)

export default Engine
