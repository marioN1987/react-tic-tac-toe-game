import { useState } from "react"

export default function Player({name, symbol, isActive, onNameChange}) {

    const [playerName, setPlayerName] = useState(name);
    const [isEditing, setEditing] = useState(false);

    const handleEdit = () => { 
        setEditing((editing) => !editing);
        
        if (isEditing) {
            onNameChange(symbol, playerName);
        }
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    let btnCaption = "Edit";

    if (isEditing) {
        editablePlayerName = <input type="text" value={playerName} onChange={(e) => setPlayerName(e.target.value)}/>;
        btnCaption = "Save";
    }

    return (
        <li className={isActive ? 'active' : null}>
            <div className="player">
                { editablePlayerName }
                
                <span className="player-symbol">{symbol}</span>
            </div>
            <button onClick={handleEdit}>{btnCaption}</button>
      </li>
    )
}