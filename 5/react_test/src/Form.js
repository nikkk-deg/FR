
const formClass = "examples";
const titleClass = "titleLogin";



export default function Form(){
  const onSubmit = (e) => {
    e.preventDefault();
    alert('hi!')
  }
  return(
    <form onSubmit={onSubmit}>
      <input type="text"></input>
      <button type="submit">Отправить</button>
    </form>
  )
}