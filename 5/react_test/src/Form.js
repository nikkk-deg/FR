import { useState } from 'react';

export default function Form(){
  
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  })

  function handleEmailChange(e){
    setCredentials({
      ...credentials,
      email: e.target.value,
    })
  }

  function handlePasswordChange(e){
    setCredentials({
      ...credentials,
      password: e.target.value,
    })
  }

  

  return(
    <form onSubmit = {e => {
      console.log(credentials);
      e.preventDefault()
      }}>
      <input 
          id = "login" 
          name = "login" 
          type="text"
          value={credentials.email}
          onChange={handleEmailChange}
      />
      <input 
          id = "password" 
          name = "password" 
          type="password"
          value={credentials.password}
          onChange={handlePasswordChange}
      />
      <button type="submit">Отправить</button>
    </form>
  )
}