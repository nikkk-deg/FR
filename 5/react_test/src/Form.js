
// const formClass = "examples";
// const titleClass = "titleLogin";
// import {useState} from 'react';

export default function Form(){
  const handleSubmit = (e) => {
    e.preventDefault();
    const login = e.target.login.value;
    const password = e.target.password.value
    console.log(`логин - ${login};  пароль - ${password}`);
    e.target.reset();
  }
  return(
    <form onSubmit={handleSubmit}>
      <input id = "login" name = "login" type="text"></input>
      <input id = "password" name = "password" type="password"></input>
      <button type="submit">Отправить</button>
    </form>
  )
}