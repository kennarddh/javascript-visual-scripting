import React, { useCallback } from 'react'
import { Handle, Position } from 'react-flow-renderer'

// Style
import { NodeDiv, NodeLabel, NodeInput } from 'Components/Flow/Node/Style'

const Primitive = ({ data }) => {
	const onChange = useCallback(evt => {
		console.log(evt.target.value)
	}, [])

	return (
		<NodeDiv>
			<NodeLabel htmlFor='input'>Primitive Variable</NodeLabel>
			<NodeInput
				id='input'
				name='input'
				onChange={onChange}
			/>
			<Handle type='source' id='output-1' position={Position.Right} />
		</NodeDiv>
	)
}

export default Primitive
