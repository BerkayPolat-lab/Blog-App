import {useState} from "react";
import { auth } from '../firebaseConfig';
import {signInWithEmailAndPassword} from 'firebase/auth';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Handle successful sign-in (e.g., redirect to a dashboard)
    } catch (error) {
      // Handle errors (e.g., display an error message)
      console.error(error);
    }
  };
    return (
        <form onSubmit={handleSignIn}>
      {/* ... form fields for email and password ... */}
      <button type="submit">Sign In</button>
        </form>
    )
}

export default LoginPage;