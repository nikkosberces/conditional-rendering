function Login({ isLoggedIn }) {
  return <div>{isLoggedIn ? <p>Welcome!</p> : <p>Please log in.</p>}</div>;
}

export default Login;
