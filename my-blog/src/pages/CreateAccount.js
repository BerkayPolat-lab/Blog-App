import React, {useState} from "react";
import { auth } from '../firebaseConfig'; // Import your Firebase config
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const CreateAccount = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Handle successful sign-up (e.g., redirect to a dashboard)
    } catch (error) {
      // Handle errors (e.g., display an error message)
      console.error(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      // Handle successful sign-out (e.g., redirect to the login page)
    } catch (error) {
      // Handle errors (e.g., display an error message)
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSignUp}>
        
        <button type="submit">Sign Up</button>

        <button onClick={handleSignOut}>Sign Out</button>
    </form>
  );

}

export default CreateAccount;