import { useState } from "react";

export default function Player({ initialName, symbol ,isActive}) {
    const [name, setName] = useState(initialName)
  const [isEditing, setEditing] = useState(false);
  function handleEditClick() {
    setEditing((editing) => !editing);
  }
  function handleChange(e){
    setName(e.target.value)
  }

  let playerName=<span className="player-name">{name}</span>
  let buttonCaption="Edit"
  if(isEditing){
    playerName=<input type="text" required value={name} onChange={handleChange}/>
   buttonCaption="Save"

  }
  return (
    <li className={isActive?'active':undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{buttonCaption}</button>
    </li>
  );
}
