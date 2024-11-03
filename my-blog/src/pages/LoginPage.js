import {useState} from "react";
import { useNavigate } from "react-router-dom";
import { auth } from '../firebaseConfig';
import {signInWithEmailAndPassword} from 'firebase/auth';
import { Link } from 'react-router-dom';



const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    }

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const credentials = await signInWithEmailAndPassword(auth, email, password);
      console.log(credentials);
      if (credentials) {
        navigate("/articles")
      }
    } catch (error) {
      console.error(error);
    }
  };
    return (
      <>
      <h1> Log In </h1>
      <form onSubmit={handleSignIn}>
        <input type="text" name="message" placeholder="Email Address" value={email} onChange={handleEmailChange} required/>
        <input type="password" name="password" placeholder="Password" value={password} onChange={handlePasswordChange} required/>
        <button type="submit">Log in</button>
        <Link to="/createaccount">Create an Account</Link>
      </form>
      </>
      
    )
}

export default LoginPage;