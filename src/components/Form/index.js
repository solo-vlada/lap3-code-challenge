import React, {useState, useEffect}  from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Form = () => {
    const [input, setInput] = useState("");
    const [submitValue, setSubmitValue] = useState("")
    const [showRepos, setShowRepos] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        async function fetchRepos(username) {
            try{
                const result = await axios.get(`https://api.github.com/users/${username}/repos`);
                setShowRepos(result.data);
                console.log(result.data[0]);
                console.log(result.data[0].owner.avatar_url);
            } catch(err){
                console.error(err);
            }
        }

        fetchRepos(submitValue);
    }, [submitValue])


    function handleInput(e) {
        const newInput = e.target.value;
        setInput(newInput);

    } 


    function handleSubmit(e){
        e.preventDefault();
        setSubmitValue(input);
        setInput("");

   }


    return (
        <>
         <form onSubmit={handleSubmit}>
            <label htmlFor='username'></label>
            <input onChange={handleInput} value={input} id='username' type='text'></input>
            <button type='submit'>Search</button>
        </form>   
        <ul>
            {showRepos.map((repo,index) => <li key={index} onClick={() => navigate(`${repo.owner.login}`)}>{repo.name}</li> )}
        </ul>
        </>
    )
}


export default Form; 
