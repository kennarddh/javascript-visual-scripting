import React from 'react'
import { Handle, Position } from 'react-flow-renderer'

// Style
import { NodeDiv, NodeLabel } from 'Components/Flow/Node/Style'

const Add = ({ data }) => {
	return (
		<NodeDiv>
			<NodeLabel>Operation Math Add</NodeLabel>
			<Handle type='source' id='output-1' position={Position.Right} />
			<Handle
				type='target'
				id='input-1'
				position={Position.Left}
				style={{ top: 10 }}
			/>
			<Handle
				type='target'
				id='input-2'
				position={Position.Left}
				style={{ top: 25 }}
			/>
		</NodeDiv>
	)
}

export default Add
