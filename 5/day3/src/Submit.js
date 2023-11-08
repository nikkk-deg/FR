const formClass = "examples";

function  Submit({isRegistration}){
    return(
    <div className = {formClass}>
        {isRegistration ? (
            <input type = "submit" id = "submit" value = "Sign up"></input>
        ):(
            <input type = "submit" id = "submit" value = "Sign in"></input>
        )}
        
    </div>
    )
  }

export default Submit;