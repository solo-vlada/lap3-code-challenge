import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';


const Form = () => {
    const [input, setInput] = useState("");
    const [submitValue, setSubmitValue] = useState("");
    const [showRepos, setShowRepos] = useState([]);


    useEffect(() => {
        async function fetchRepos(username) {
            try{
                const result = await axios.get(`https://api.github.com/users/${username}/repos`);
                setShowRepos(result.data)
            } catch(err){
                console.error(err);
            }
        }

        fetchRepos(submitValue)
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
            <label htmlFor='usernme'></label>
            <input onChange={handleInput} value={input} id='username' type='text'></input>
            <button>Submit</button>
        </form>   
        </>
    )
}


export default Form; 
