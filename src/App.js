import { useState } from 'react';
import './App.css';

const emojiDictionary = {
  "😁" : "Smiling",
  "😂" : "Laughing",
  "😢" : "Sad",
  "💖" : "Heart",
  "😎" : "Cool",
  "😒" : "Mean",
  "😘" : "Kissing",
  "🤩" : "Star-Struck",
  "😑" : "Expression-less",
  "🥱" : "Yawnying"
}
 var emojis = Object.keys(emojiDictionary);

function App() {
  const [meaning,setMeaning] = useState("")
  function emojiHandler(event){
    const userInput = (event.target.value)
    var meaning = emojiDictionary[userInput]
    if(meaning === undefined){
      meaning = "Not available in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji){
    var meaning = emojiDictionary[emoji]
    setMeaning(meaning)
  }
  return (
    <div className="App">
      <h1>Emoticon Interpreter</h1>
      <input onChange={emojiHandler}></input>
      <h2>{meaning}</h2>
      <h3>Emojis we have</h3>
      {
        emojis.map(emoji => 
             {return <span onClick={() => emojiClickHandler(emoji)} style={{fontSize: "2rem", padding:"0.5rem", cursor:"pointer"}} key={emoji}>{emoji}</span>}
          )
      }

    </div>
  );
}

export default App;
