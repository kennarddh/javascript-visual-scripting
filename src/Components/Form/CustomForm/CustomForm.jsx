import React from 'react'

// Style
import {
	FormInputWrapper,
	FormButtonWrapper,
	FormButton,
} from './Style'

const CustomForm = ({ children, buttonTitle, onSubmit, ...formProps }) => {
	const OnSubmit = event => {
		event.preventDefault()

		onSubmit()
	}

	return (
		<>
			<form onSubmit={OnSubmit} {...formProps}>
				<FormInputWrapper>{children}</FormInputWrapper>
				<FormButtonWrapper>
					<FormButton type='submit'>{buttonTitle}</FormButton>
				</FormButtonWrapper>
			</form>
		</>
	)
}

export default CustomForm
