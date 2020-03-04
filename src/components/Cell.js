import React from "react";

import { Col } from "./Col";
import { Brain, EMPTY } from "../Brain";

const initialState = {
  reset: true,
  char: EMPTY,
  canClick: true
};

export function Cell({ charRef, boardRef, row, col, reset }) {
  const [state, setState] = React.useState(initialState);

  React.useEffect(() => {
    if (state?.reset && state?.reset !== reset) {
      setState(s => ({...initialState, reset}));
    }
  }, [reset, state]);

  function cellClick() {
    if (state.canClick) {
      charRef.current = charRef.current === "o" ? "x" : "o";
      boardRef.current[row][col] = charRef.current;

      if (Brain.canCheckDiagonals(row, col)) {
        const winner = Brain.diagonalWinner(charRef.current, boardRef.current, row, col);
        if (winner.winner) {
          alert(`${winner.who} won`);
        }
      } else {
        const winner = Brain.checkRowAndCol(charRef.current, boardRef.current, row, col);
        if (winner.winner) {
          alert(`${winner.who} won`);
        }
      }

      setState(s => ({ ...s, char: charRef.current, canClick: false }));
    }
  }

  return <Col onClick={cellClick}>{state.char}</Col>;
}
