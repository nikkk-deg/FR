import Input from "./Input";
import Submit from "./Submit";

const titleClass = "titleLogin";

function Login({isRegistration}){
    return(
        <div>
        {isRegistration ? (
            <div>
            <h2 className={titleClass}>Sign up form</h2>
            <Input isName={true}/>
            <Input isName={false}/>
            <Submit isRegistration = {isRegistration}/>
            </div>

        ):(
            <div>
            <h2 className={titleClass}>Sign in form</h2>
            <Input isName={true}/>
            <Input isName={false}/>
            <Submit isRegistration = {isRegistration}/>
            </div>
        )}
        </div>
    )
}

export default Login;