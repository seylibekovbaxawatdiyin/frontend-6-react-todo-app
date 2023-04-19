import React, { useContext, useEffect } from 'react'
import './Registr.scss'
import { AuhtContext } from '../../App'

const Registr = () => {
	const { state, dispatch } = useContext(AuhtContext)
	const navigate = useNavigate()

	useEffect(() => {
		if (state.isLogged) {
			navigate('/', { replace: true })
		}
	}, [])

	console.log(state)
	return (
		<div className='auth-container'>
			<form className='auth-form'>
				<h1>Register</h1>
				<input placeholder='Enter your number' type='text' required />
				<input placeholder='Enter your name' type='text' required />
				<input type='password' placeholder='Password' required />
				<button>Register</button>
			</form>
		</div>
	)
}
export default Registr
