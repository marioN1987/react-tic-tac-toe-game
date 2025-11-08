export default function GameBoard({ onSelectSquare, board }) {
    return (
        <ol id="game-board">
            {
                board.map((row, rowIndx) => <li key={rowIndx}>
                    <ol>
                        {
                            row.map((playerSymbol, colIndx) => (
                                <li key={colIndx}>
                                    <button 
                                        onClick={() => onSelectSquare(rowIndx, colIndx)}
                                        disabled={playerSymbol}
                                    >
                                        {playerSymbol}
                                    </button>
                                </li>
                            ))
                        }
                    </ol>
                </li>)
            }
        </ol>
    )
}