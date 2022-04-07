import { RootEngine } from 'flume'

// Config
import Config from 'Config/Config'

// Utils
// Engine
import ResolvePorts from 'Resolver/ResolvePorts'
import ResolveNodes from 'Resolver/ResolveNodes'

const Engine = new RootEngine(Config, ResolvePorts, ResolveNodes)

export default Engine
