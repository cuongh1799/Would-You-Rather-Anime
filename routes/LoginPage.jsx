function LoginPage() {
  return (
    <>
      <div className="banner-login">
        <span className="login-area">
          <div className="header-logo">Would You Rather</div>
          <form className="login-form">
            <label for="email">Email:</label>
            <br />
            <input type="text" id="email" name="email"></input>
            <br />
            <br/>
            <label for="password">Password:</label>
            <br />
            <input type="text" id="password" name="password"></input>
            <br />
          </form>
        </span>
      </div>
    </>
  );
}

export default LoginPage;
