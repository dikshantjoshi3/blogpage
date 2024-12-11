import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import Data from './MyRouters/Data';

function CreactBlog({setData}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [author, setAuthor] = useState("");
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [file, setFile] = useState("");
    const [textEditor, setTextEditor] = useState("");

    const [err, setErr] = useState("");

    const formData = {title, description, author, country, state, city, textEditor }
        console.log(formData);
    const countries = [
        { name: 'India', states: ['Madhya Pradesh', 'Maharashtra', 'Karnataka'] },
        { name: 'USA', states: ['California', 'Texas', 'Florida'] }
    ];

    const statesCities = {
        'Madhya Pradesh': ['Indore', 'Bhopal', 'Gwalior'],
        'Maharashtra': ['Mumbai', 'Pune', 'Nagpur'],
        'Karnataka': ['Bangalore', 'Mysore', 'Hubli'],
        'California': ['Los Angeles', 'San Francisco', 'San Diego'],
        'Texas': ['Houston', 'Dallas', 'Austin'],
        'Florida': ['Miami', 'Orlando', 'Tampa']
    };

    // function loginForm(e) {
    //     e.preventDefault();
    //     props.onSubmit(formData)
    //     // Handle form submission logic
    // }

    // function handleSubmit = (e) => {
    //     e.preventDefault();
    // }

    function titleHandler(e) {
        let titleElement = e.target.value;
        if (titleElement.length < 10) {
            setErr(true);
        } else {
            setErr(false);
        }
    }

    function descriptionHandler(e) {
        let descriptionElement = e.target.value;
        if (descriptionElement.length < 50) {
            setErr(true);
        } else {
            setErr(false);
        }
    }

    
    
   
    function setData(){

        const id = 5;
        const navigate =  useNavigate()

            function goToHome() {
                navigate("/Home", {state: {id : id}})
            }
      
}

    return (
        <>
         <button >go to</button>
        <form onSubmit={setData} className="box-content mx-9 border border-black p-4">
            <h2 className="text-xl font-bold mb-4">BLOG</h2>
            <h5 className="text-lg mb-2">Title</h5>
            <input type="text" placeholder="Enter your title" onChange={titleHandler} className="w-full mb-2 p-2 border" />
            {err && <span className="text-red-500">Minimum 10 letters required!</span>}<br /><br />

            <h5 className="text-lg mb-2">Description</h5>
            <input type="text" placeholder="Enter your description" onChange={descriptionHandler} className="w-full mb-2 p-2 border" />
            {err && <span className="text-red-500">Minimum 50 letters required!</span>}<br /><br />

            <h5 className="text-lg mb-2">Author</h5>
            <input type="text" placeholder="Enter author name" value={author} onChange={(e) => setAuthor(e.target.value)} className="w-full mb-2 p-2 border" />


        <h5 className="text-lg mb-2">Country</h5>
            <input type="text" placeholder="Enter country" className="w-full mb-2 p-2 border" /> 

            <h5 className="text-lg mb-2">Country</h5>
            <select value={country} onChange={(e) => setCountry(e.target.value)} className="w-full mb-2 p-2 border">
                <option value="">Select Country</option>
                {countries.map((country) => (
                    <option key={country.name} value={country.name}>{country.name}</option>
                ))}
            </select>

            {country && (
                <>
                    <h5 className="text-lg mb-2">State</h5>
                    <select value={state} onChange={(e) => setState(e.target.value)} className="w-full mb-2 p-2 border">
                        <option value="">Select State</option>
                        {countries.find(c => c.name === country).states.map((state) => (
                            <option key={state} value={state}>{state}</option>
                        ))}
                    </select>
                </>
            )}

            {state && (
                <>
                    <h5 className="text-lg mb-2">City</h5>
                    <select value={city} onChange={(e) => setCity(e.target.value)} className="w-full mb-2 p-2 border">
                        <option value="">Select City</option>
                        {statesCities[state].map((city) => (
                            <option key={city} value={city}>{city}</option>
                        ))}
                    </select>
                </>
            )}

            <h5 className="text-lg mb-2">File</h5>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} className="w-full mb-2 p-2 border" />

            <h5 className="text-lg mb-2">Text Editor</h5>
            <input type="text" placeholder="Text" value={textEditor} onChange={(e) => setTextEditor(e.target.value)} className="w-full mb-2 p-2 border" />

            <button type="submit" onClick={setData} className="bg-black text-yellow-600 p-2 mt-4">Submit</button>
            <button type="submit" onClick={setData} className="mx-2 bg-black text-yellow-600 p-2 mt-4">Review Data</button>
        </form>

        </>
    );
}

export default CreactBlog;
