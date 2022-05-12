import { useState, useCallback, useEffect } from 'react';

function pickXOrORandomly() {
  return Math.random() > 0.5 ? "X" : "O";
}

function createMatrix() {
  const matrix = [];
  for(let i = 0; i < 3; i++) {
    const row = [];
    for(let j = 0; j < 3; j++) {
        row.push('');
    }
    matrix.push(row);
  }
  return matrix;
}

function updateSymbol(symbol) {
  if(symbol === "X") {
      return "O";
  } else {
      return "X";
  }
}


export default function Index() {
  const [symbol, setSymbol] = useState("X");
  const [matrix, setMatrix] = useState(createMatrix());

  useEffect(() => {
    setSymbol(pickXOrORandomly());
  }, [])

  const click = useCallback((i, j) => {
    const newMatrix = [...matrix];
    newMatrix[i][j] = symbol;
    setMatrix(newMatrix);
    setSymbol(updateSymbol(symbol));
  }, [symbol])

  return (
    <table>
      <tbody>
        {matrix.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j} className="table-cell">
                {
                  cell === '' ? (
                    <button aria-label="place in this cell" className="table-cell-button" onClick={() => click(i, j)}></button>
                  ) : cell
                }
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
