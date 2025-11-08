export default function Log({ turns }) {
    return <ol id="log">
        { 
            turns.map((turn, indx) => 
            <li key={indx}>
                <p>{turn.player} selected {turn.square.row},{turn.square.col}</p>
            </li>)
        }
    </ol>
}