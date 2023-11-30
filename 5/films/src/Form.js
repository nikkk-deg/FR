import { useState} from 'react';
import { STRINGS } from './view';
import { resourceUsage } from 'process';




export default function Form(){
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    function changeName(e){
        setName(e.target.value);
    }

    function createLink(){
        return STRINGS.API + name;
    }

    function Genderize(){
        return <h1>Your gender maybe is {gender}</h1>
    }

    async function handleClickButton(){
        try{
            const response = await fetch(createLink());
            let user = await response.json();
            console.log(user.gender);   
            setGender(user.gender);
        }catch(err){
            console.log(err);
        }
        
    }
    return(
        <>
            <form onSubmit = {e => e.preventDefault()}>
                <input
                    type="text"
                    name="name_"
                    id="name"
                    value={name}
                    onChange={changeName}
                />
                <button onClick={handleClickButton}>Ввод</button>
            </form>
            <Genderize gender = {gender}/>
        </>
    )
}