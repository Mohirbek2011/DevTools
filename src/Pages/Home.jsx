import { SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import Reg from '../components/Reg/Reg';
import './Home.css';
import Modals from '../Components/Modals/Modals';
import Editor from '../Components/Editor/Editor';
import Quiz from '../Components/Quiz/Quiz';
import CodeEditor from '../Components/CodeEditor/CodeEditor';

export default function Home() {
	return (
		<>
			<div className='container'>
				{/* Если пользователь НЕ залогинен */}
				<SignedOut>
					<div className='auth-message'>
						<h2>Зарегистрируйтесь или войдите в аккаунт</h2>
						<p>Чтобы получить доступ к контенту, авторизуйтесь.</p>
						<SignInButton mode='modal'>
							<button className='login-button'>Войти / Зарегистрироваться</button>
						</SignInButton>
					</div>
				</SignedOut>
			</div>

			{/* Если пользователь залогинен */}
			<SignedIn>
				<Reg />
				<Modals />
				<Editor />
				<Quiz />
				<CodeEditor />
			</SignedIn>
		</>
	);
}
