function Login() {
    const handleLogin = () => {
      localStorage.setItem("auth", "true");
      window.location.href = "/profile"; // Redirect to profile after login
    };
  
    return <button onClick={handleLogin}>Login</button>;
  }
  
  export default Login;
  