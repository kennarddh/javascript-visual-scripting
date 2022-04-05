import React from 'react'

// Style
import {
	CustomInputContainer,
	CustomInputInput,
	CustomInputLabel,
} from './Style'

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'

const CustomInput = ({ value, onChange, type, id, label, ...inputProps }) => {
	return (
		<>
			<CustomInputContainer>
				<CustomInputLabel htmlFor={id} type={type}>
					{type === 'file' && <FontAwesomeIcon icon={faUpload} />}
					{label ? label : 'Upload'}
				</CustomInputLabel>
				<CustomInputInput
					id={id}
					value={value}
					onChange={event => onChange(event)}
					type={type}
					{...inputProps}
				/>
			</CustomInputContainer>
		</>
	)
}

export default CustomInput
