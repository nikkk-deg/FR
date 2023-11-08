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

export default Username;