const mainContentClass = "mainContent";
const titleClass = "titleLogin"
const formClass = "examples";

function Username(){
  return(
    <div className = {formClass}>
      <label for = "username">Username </label>
      <input type="text" name = "username" id = "username" required></input>
    </div>
  )
}

function Password(){
  return(
  <div className = {formClass}>
    <label for = "password">Password </label>
    <input type="password" name = "password" id = "password" required></input>
  </div>
  )
}

function  Submit(){
  return(
  <div className = {formClass}>
      <input type = "submit" id = "submit"></input>
  </div>
  )
}

function LoginForm(){
  return(
    <form>
    <Username/>
    <Password/>
    <Submit/>
  </form>
  )
}

function App() {
  return (
    <div className="App">
      <div className={mainContentClass}>
        <h2 className={titleClass}>Login form</h2>
        <LoginForm/>
      </div>
    </div>
  );
}

export default App;
