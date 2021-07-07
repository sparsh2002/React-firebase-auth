import './App.css';
import fire from './fire';
import {useState , useEffect}  from 'react'
import Login from './Login';
import Hero from './Hero';
function App() {

  const [user, setUser]  = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError , setPasswordError] = useState('')
  const [hasAccount, setHasAccount] = useState('')

  const clearInput = () => {
    setEmail('')
    setPasswordError('')
  }

  const clearError = ()  => {
    setEmailError('')
    setPasswordError('')
  }  

  const handleLogin = () => {
    clearError()
    fire
      .auth()
      .signInWithEmailAndPassword(email,password)
      .catch((err => {
        switch(err.code){
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            setEmailError(err.message)
            break;
          case 'auth/wrong-password':
            setPasswordError(err.message)
            break;
        }
      }))
  }

  const handleSignup = () =>{
    clearError()
    fire
      .auth()
      .createUserWithEmailAndPassword(email,password)
      .catch((err => {
        switch(err.code){
          case 'auth/email-already-in-use':
          case 'auth/invalid-email':
            setEmailError(err.message)
            break;
          case 'auth/weak-password':
            setPasswordError(err.message)
            break;
        }
      }))
  }


const handleLogout = () => {
  fire.auth().signOut();
}


const authListner = () => {
  fire.auth().onAuthStateChanged(user =>{
    if(user){
      clearInput()
      setUser(user);
    }else{
      setUser('');
    }
  })
}


useEffect(() => {
  authListner();
}, [])
  return (
    <div className="App">
      {
        user ? (
          <Hero handleLogout={handleLogout} />
        ) : (
          <Login
          email={email}
          setEmail={setEmail}
          emailError= {emailError}
          setEmailError={setEmailError}
          password={password}
          setPassword={setPassword}
          setPasswordError={setPasswordError}
          handleLogin={handleLogin}
          hasAccount={hasAccount}
          handleSignup={handleSignup}
          setHasAccount={setHasAccount}
           />
        )
      }
    
       
    </div>
  );
}

export default App;
