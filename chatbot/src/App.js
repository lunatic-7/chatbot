import React, { useState } from 'react';

function Chatbot() {
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState('');

  const handleChange = (event) => {
    setUserInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userInput);
    fetch(`http://127.0.0.1:8000/chatbot?user_input=${userInput}`)
      .then(res => res.json())
      .then(data => setResponse(data.response))
  }

  return (
    <div className="bg-gray-200 p-4">
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md">
        <input type="text" value={userInput} onChange={handleChange} className="border border-gray-400 p-2 rounded-lg" placeholder="Type here..." />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">Submit</button>
      </form>
      <p className="bg-white p-4 rounded-lg shadow-md">{response}</p>
    </div>
  );
}

export default Chatbot;
