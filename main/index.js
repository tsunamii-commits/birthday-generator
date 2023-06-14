import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';
import wendy from '../assets/Wendy.png';
import { useState } from 'react';

const Home = () => {
const [userInput, setUserInput] = useState('');

const [apiOutput, setApiOutput] = useState('')
const [isGenerating, setIsGenerating] = useState(false)

const callGenerateEndpoint = async () => {
  setIsGenerating(true);
  
  console.log("Calling OpenAI...")
  const response = await fetch('/api/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userInput }),
  });

  const data = await response.json();
  const { output } = data;
  console.log("OpenAI replied...", output.text)

  setApiOutput(`${output.text}`);
  setIsGenerating(false);
}


const onUserChangedText = (event) => {
  setUserInput(event.target.value);
};

  return (
    <div className="root">
      <Head>
        <title>GPT-3 Writer | buildspace</title>
      </Head>
      <div className="container">
        <div className="header">
        <div className="header-logo">
            <Image src={wendy} alt="buildspace Logo" />
          </div>
          <div className="header-title">
            <h1>wendy's magic birthday message generator!</h1>
          </div>
          <div className="header-subtitle">
            <h2>It's Wendy's 29th and she doesn't have enough friends to greet her. Make wendy's day by picking a random person - or animal - and have them greet Wendy a happy birthday in their special way!</h2>
          </div>
        </div>
        <div className="prompt-container">
          <textarea 
          placeholder="start typing here" 
          className="prompt-box" 
          value={userInput}
          onChange={onUserChangedText}/>
        </div>
        <div className="prompt-buttons">
        <a
          className={isGenerating ? 'generate-button loading' : 'generate-button'}
          onClick={callGenerateEndpoint}
  >          
  <div className="generate">
        <p>Generate</p>
      </div>
    </a>
  </div>
  {apiOutput && (
  <div className="output">
    <div className="output-header-container">
      <div className="output-header">
        <h2>{userInput} says:</h2>
      </div>
    </div>
    <div className="output-content">
      <p>{apiOutput}</p>
    </div>
  </div>
)}
      </div>
      
    </div>
    
  );
};

export default Home;
