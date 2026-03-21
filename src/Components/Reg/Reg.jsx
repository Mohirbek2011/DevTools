import {
	SignedIn,
	SignedOut,
	SignInButton,
	UserButton,
} from '@clerk/clerk-react'
import './Reg.css'
import { IoSettings } from 'react-icons/io5'
import { Link, Route } from 'react-router-dom'
import Settings from '../../Pages/settings'
import { useNavigate } from 'react-router-dom'

export default function App() {
	const navigate = useNavigate()
	return (
		<>
			<div className='header'>
				<div className='container'>
					<div className='header__wrapper'>
						<h1 className='header__logo'>DevTools</h1>
						<div className='header__reg'>
							<button onClick={() => navigate("/settings")} className='header__settings-btn'>
								<div className='settings-icon'>
									<IoSettings className='header__settings-icon' />
								</div>
							</button>
							<SignedOut>
								<SignInButton className='clerk-button' />
							</SignedOut>
							<SignedIn>
								<UserButton className='user-button' />
							</SignedIn>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
