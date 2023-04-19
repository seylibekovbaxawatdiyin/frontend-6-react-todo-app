import React, { createContext, useReducer } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Registr from './pages/Registr/Registr'
import { authReducer, initialState } from './store/authReducer'

export const AuhtContext = createContext()

function App() {
	const [state, dispatch] = useReducer(authReducer, initialState)
	return (
		<AuhtContext.Provider value={{ state, dispatch }}>
			<Routes>
				<Route path='/login' element={<Login />}></Route>
				<Route path='/registr' element={<Registr />}></Route>
			</Routes>
		</AuhtContext.Provider>
	)
}

export default App
