import React from 'react';
import './signup.css';
import { Link } from 'react-router-dom';


export default function signup() {

	const store = (e) =>{
		e.preventDefault();
		let username = document.getElementById('userName').value;
		let password = document.getElementById('password').value;
		let mobile = document.getElementById('mobileNo').value;
		localStorage.setItem('username',username);
		localStorage.setItem('password',password);
		localStorage.setItem('mobile',mobile);
		console.log(localStorage);
		window.location.href='/login'
	}
	


	return (
		<div>
			<div className="signup-form">
				<form>
					<h1>Sign up</h1>
					<p>User name</p>
					<input type="text" name="user"  id="userName" required placeholder="User Name" />
					<p>Password</p>
					<input type="password" id="password" name="password" required placeholder="Password" />
					<p>Mobile no</p>
					<input type="number" id="mobileNo" min={1}  name="mobile no" required placeholder="Mobile no." />
					<br />
					<br />
					<button type="submit" onClick={store}>Sign up</button>
					<h4>
						Already have an account? <Link to="/login" id='btn'>
						Login
						</Link>
					</h4>
				</form>
			</div>
		</div>
	);
}
