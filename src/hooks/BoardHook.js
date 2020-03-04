import React from "react";

import { Cell } from "../components/Cell";
import { EMPTY } from "../Brain";

export default function useBoard() {
  const [board, setBoard] = React.useState();
  const boardRef = React.useRef();
  const charRef = React.useRef();
  const resetRef = React.useRef(0);

  const resetBoard = React.useCallback(function() {
    const newBoard = Array.from([0, 1, 2], () =>
      Array.from([0, 1, 2], () => EMPTY)
    );

    boardRef.current = newBoard;
    charRef.current = "o";
    resetRef.current += 1;

    const tmp = newBoard.map((row, i) =>
      row.map((_, j) => (
        <Cell 
          key={i + j}
          boardRef={boardRef}
          charRef={charRef}
          row={i}
          col={j}
          reset={resetRef.current}
        />
      ))
    );

    setBoard(tmp);
  }, [boardRef, charRef]);

  React.useEffect(() => {
    console.log("use board effect")
    if (resetBoard) {
      resetBoard();
    }
  }, [resetBoard])

  return [board, resetBoard];
}
