export default function GameOver({winner, onRematch}) {
    return (
        <div id="game-over">
            <h2>Game over!</h2>
            <p>{winner ? `${winner} won!` : "It's draw"}</p>
            <button onClick={onRematch}>Rematch!</button>
        </div>
    );
}