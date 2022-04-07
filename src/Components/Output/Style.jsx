import styled from 'styled-components'

export const Container = styled.div`
	width: 200px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
`

export const Title = styled.h5`
	margin: 0;
	font-size: 15px;
	font-weight: bold;
	color: #333;
	background-color: #f5f5f5;
	border-bottom: 1px solid #ccc;
	border-radius: 15px 15px 0 0;
	width: 100%;
	padding: 5px;
	word-wrap: break-word;
`

export const Description = styled.p`
	margin: 0;
	font-size: 12px;
	color: #333;
	background-color: #fafafa;
	border-radius: 0 0 15px 15px;
	width: 100%;
	padding: 5px;
	word-wrap: break-word;
`
