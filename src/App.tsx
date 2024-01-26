import { useState } from "react"; 
import './App.css'

export default function CharacterStats() {
  const [character, setCharacter] = useState({
    name: 'Gandalf',
    strength: 10,
    intelligence: 18,
    charisma: 16
  });

  function handleChange(e: { target: { name: any; value: any; }; }) {
    const { name, value } = e.target;

    setCharacter(prevCharacter => ({
      ...prevCharacter,
      [name]: value
    }));
  }

  function handleSave() {
    // Aquí puedes agregar lógica para guardar el personaje
    console.log("Guardando cambios:", character);
    // También puedes enviar los cambios a un servidor aquí
  }

  return (
    <div>
      <label>
        Name:
        <input
          name="name"
          value={character.name}
          onChange={handleChange}
        />
      </label>

      <label>
        Strength:
        <input
          name="strength"
          value={character.strength}
          onChange={handleChange}
        />
      </label>

      <label>
        Intelligence:
        <input
          name="intelligence"
          value={character.intelligence}
          onChange={handleChange}
        />
      </label>

      <label>
        Charisma:
        <input
          name="charisma"
          value={character.charisma}
          onChange={handleChange}
        />
      </label>

      <button onClick={handleSave}>Guardar</button>
    </div>
  );
}












/*import React, { useState } from 'react';
import './App.css'; // Importa tu archivo de estilos CSS

export default function EmojiCounter() {
  const [emojiString, setEmojiString] = useState('😾');

  function handleClick1() {
    setEmojiString(prevEmoji => prevEmoji + '😎🎶');
  }

  function handleClick2() {
    setEmojiString(prevEmoji => prevEmoji + '😶‍🌫️🫥');
  }

  function handleClick3() {
    // Verifica si ya hay emojis en el estado antes de eliminar
    if (emojiString.length > 0) {
      setEmojiString(prevEmoji => prevEmoji.slice(0, -1)); // Elimina el último emoji
    }
  }

  return (
    <div className="emoji-counter-container">
      <h1>{emojiString}</h1>
      <button onClick={handleClick1} className="emoji-button"> Music😎🎶</button>
      <button onClick={handleClick2} className="emoji-button">Cloud 😶‍🌫️🫥</button>
      <button onClick={handleClick3} className="emoji-button">Delete 💥</button>
    </div>
  );
}*/
