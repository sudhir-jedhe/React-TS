import React from 'react'
import styled from 'styled-components'

const reducer = (state, action) => {
	if (action.isSetError) {
		return {
			...state,
			[action.type]: { ...state[action.type], hasError: action.payload }
		}
	}
	return {
		...state,
		[action.type]: { ...state[action.type], value: action.payload }
	}
}

const checkPayloadError = (data) => {
	const errorFields = requiredFields.filter((field) => {
		if (field.isRequired) {
			if (field.hasCrossField) {
				const crossField = requiredFields.find(
					(rqField) => rqField.name === field.hasCrossField
				)
				return !field.logic(
					(data[field.name].value || '').trim(),
					(data[crossField.name].value || '').trim()
				)
			}
			return !field.logic((data[field.name].value || '').trim())
		}
		return false
	})
	return errorFields.map((field) => ({
		name: field.name,
		error: field.error
	}))
}

const requiredFields = [
	{
		name: 'firstName',
		isRequired: true,
		logic: (str = '') => str.length > 0,
		error: 'First name cannot be empty'
	},
	{
		name: 'lastName',
		isRequired: true,
		logic: (str = '') => str.length > 0,
		error: 'Last name cannot be empty'
	},
	{
		name: 'email',
		isRequired: true,
		logic: (email = '') =>
			email
				.toLowerCase()
				.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/),
		error: 'Invalid email address'
	},
	{
		name: 'password',
		isRequired: true,
		logic: (str = '') => str.length > 7,
		error: 'Password must be greater than 7 characters'
	},
	{
		name: 'confirmPassword',
		isRequired: true,
		logic: (str = '', password = '') => {
			return str === password
		},
		error: 'Passwords do not match',
		hasCrossField: 'password'
	}
]

const getInitialFormState = (requiredFields) => {
	return requiredFields.reduce((initialState, field) => {
		initialState[field.name] = {
			value: '',
			hasError: false
		}
		return initialState
	}, {})
}
const SignUpForm = () => {
	const [formData, setFormData] = React.useReducer(
		reducer,
		getInitialFormState(requiredFields)
	)

	const setErrorFields = (fieldsError = []) => {
		fieldsError.forEach((fieldError) => {
			setFormData({
				isSetError: true,
				type: fieldError.name,
				payload: fieldError.error
			})
		})
	}

	const resetErrorFields = () => {
		requiredFields.forEach((field) =>
			setFormData({
				isSetError: true,
				type: field.name,
				payload: ''
			})
		)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		resetErrorFields([])
		const resutl = checkPayloadError(formData)
		setErrorFields(resutl)
		if (resutl.length == 0) console.log('Form submitted successfully')
	}

	const onChangeHandler = (e) => {
		setFormData({
			isSetError: false,
			type: e.target.name,
			payload: e.target.value
		})
	}

	return (
		<Wrapper>
			<form onSubmit={handleSubmit}>
				<input
					data-testid="first-name-id"
					type="text"
					name="firstName"
					placeholder="First Name"
					value={formData.firstName.value}
					onChange={onChangeHandler}
				/>
				<p data-testid="first-name-error-id" className="error">
					{formData.firstName.hasError}
				</p>
				<input
					data-testid="last-name-id"
					type="text"
					name="lastName"
					placeholder="Last Name"
					value={formData.lastName.value}
					onChange={onChangeHandler}
				/>
				<p data-testid="last-name-error-id" className="error">
					{formData.lastName.hasError}
				</p>
				<input
					data-testid="email-id"
					type="email"
					name="email"
					placeholder="Email Address"
					value={formData.email.value}
					onChange={onChangeHandler}
				/>
				<p data-testid="email-error-id" className="error">
					{formData.email.hasError}
				</p>
				<input
					data-testid="password-id"
					type="password"
					name="password"
					placeholder="Password"
					value={formData.password.value}
					onChange={onChangeHandler}
				/>
				<p data-testid="password-error-id" className="error">
					{formData.password.hasError}
				</p>
				<input
					data-testid="confirm-password-id"
					type="password"
					name="confirmPassword"
					placeholder="Confirm Password"
					value={formData.confirmPassword.value}
					onChange={onChangeHandler}
				/>
				<p data-testid="confirm-password-error-id" className="error">
					{formData.confirmPassword.hasError}
				</p>
				<button type="submit">Sign Up</button>
			</form>
		</Wrapper>
	)
}

export default SignUpForm

const Wrapper = styled.div`
	margin-top: 24px;
	font-family: sans-serif;

	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	input {
		padding: 8px 12px;
		font-size: 18px;
		margin-bottom: 6px;
		width: clamp(200px, 40%, 400px);
	}

	button {
		padding: 10px 20px;
		font-size: 18px;
		border: none;
		border-radius: 4px;
		background-color: #333;
		color: #fff;
		cursor: pointer;
		margin-top: 24px;

		&:hover {
			opacity: 0.8;
		}
	}

	.error {
		margin: 0 0 24px 0;
		color: red;
	}
`