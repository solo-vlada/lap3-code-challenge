import React, {useState, useEffect}  from 'react';
import axios from 'axios';


const Form = () => {
    const [input, setInput] = useState("");
    const [submitValue, setSubmitValue] = useState("")
    const [showRepos, setShowRepos] = useState([]);


    useEffect(() => {
        async function fetchRepos(username) {
            try{
                const result = await axios.get(`https://api.github.com/users/${username}/repos`);
                setShowRepos(result.data)
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
            <button>Search</button>
        </form>   
        <ul>
            {showRepos.map((repo,index) => <li key={index}>{repo.name}</li> )}
        </ul>
        </>
    )
}


export default Form; 
