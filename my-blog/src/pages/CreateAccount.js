import React, {useState} from "react";
import { auth } from '../firebaseConfig'; // Import your Firebase config
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const credentials = await createUserWithEmailAndPassword(auth, email, password);
      if (credentials) {
        navigate("/articles");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      // Handle successful sign-out (e.g., redirect to the login page)
      navigate("/articles")
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <h1> Create an Account </h1>
    <form onSubmit={handleSignUp}>
        <input name="Email" placeholder="Email Address" value={email} onChange={handleEmailChange} required />
        <input name="Password" type="password" placeholder="Password" value={password} onChange={handlePasswordChange} required />
        <button type="submit">Sign Up</button>
        <button onClick={handleSignOut}>Sign Out</button>
    </form>
    </>
    
  );

}

export default CreateAccount;