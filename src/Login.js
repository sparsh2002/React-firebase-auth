const Login = (props) => {

    const {email, setEmail , password , setPassword , emailError, setEmailError , passwordError , setPasswordError, handleLogin , handleSignup , hasAccount , setHasAccount} = props;

    return ( 
        <section className="login">
            <div className="loginContainer">
                <label>Username</label>
                <input type="text" 
                autoFocus
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                 />
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input type="text" 
                autoFocus
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                 />
                 <p className="errorMsg">{passwordError}</p>
                 <div className="btnContainer">
                     {
                         hasAccount?(
                            <>
                                <button onClick={handleLogin}>Sign In</button>
                                <p>Don't have an account? <span onClick ={() => setHasAccount(!hasAccount) }>Sign Up</span></p>
                            </>
                         ) : (
                            <>
                                <button onClick={handleSignup}>Sign Up</button>
                                <p>Have an account?<span onClick ={() => setHasAccount(!hasAccount)}>Sign In</span></p>
                            </>
                         )
                     }
                 </div>
            </div>
        </section>
     );
}
 
export default Login;