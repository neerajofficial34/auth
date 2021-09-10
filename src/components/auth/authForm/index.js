import React from 'react'
import FromControl from './../../ui/formControl'
import Button from './../../ui/button'
import Input from './../../ui/input'
import Text from './../../ui/text'

const AuthForm = ({ formik, showPassword, showPasswordClicked, buttonText }) => {
	return (
		<form noValidate onSubmit={formik.handleSubmit}>
			<FromControl>
				<Input
					id="email"
					type="email"
					name="email"
					label="Email Address" 
					value={formik.values.email}
	        		onChange={formik.handleChange}
	        		onBlur={formik.handleBlur}
				/>
				<Text variant="helperText" id="email">
					{formik.touched.email && formik.errors.email}
				</Text>
			</FromControl>
			<FromControl>
				<Input 
					id="password"
					label="Password"
					name="password"
					type={showPassword ? 'text' : 'password'}
					value={formik.values.password}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				<Text variant="helperText">
					{formik.touched.password && formik.errors.password}
				</Text>
			</FromControl>
			<Button 
				type="submit"
				variant="contained"
				text={buttonText}
				onClick={formik.handleSubmit} />
		</form>
	)
}

export default AuthForm