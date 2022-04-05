import styled from 'styled-components'

export const CustomInputContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 10px;
	align-items: center;
`

export const CustomInputInput = styled.input`
	border-radius: 25px;
	border: 1px solid rgb(128, 128, 128, 0.5);
	padding: 5px 10px;
	text-align: center;

	&[type='file'] {
		display: none;
	}
`

export const CustomInputLabel = styled.label`
	&[type='file'] {
		border-radius: 25px;
		border: 1px solid rgb(128, 128, 128, 0.5);
		padding: 5px 10px;
		display: flex;
		align-items: center;
		justify-content: space-around;
		min-width: 100px;
		cursor: pointer;
	}
`
