import React from 'react';
import './login.css';
// import Home from '../home/Home'
import { Link } from 'react-router-dom';


export default function login() {
	const check = (e) =>{
		e.preventDefault();
		let storedName = localStorage.getItem('username');
		let storedPw = localStorage.getItem('password');
		
		let userName = document.getElementById('userName');
		let userPw = document.getElementById('userPw');
		
		if(userName.value === storedName && userPw.value === storedPw) {
			alert('You are logged in.');  
			window.location.href="/home1"
		}else {
			alert('ERROR.');
		}
	}

	return (
		<div>
			<div className="login-form">
				<form>
					<h1>Login</h1>
					<p>User name</p>
					<input type="text" name="user" id="userName" required placeholder="User Name" />
					<p>Password</p>
					<input type="password" id="userPw" name="password" required placeholder="Password" />
					<br />
					<br />
					<button type="submit" onClick={check}>Login</button>
					<h4>
						Don't have an account? <Link to="/signup" id='btn'>Sign up</Link>
					</h4>
				</form>
			</div>
		</div>
	);
}
