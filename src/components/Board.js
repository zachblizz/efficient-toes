import React from "react";
import styled from "styled-components";

import useBoard from "../hooks/BoardHook";

export const Grid = styled.div`
  display: inline-grid;
  grid-template-columns: auto auto auto;
`;

const PaddedDiv = styled.div`
  margin-bottom: 10px;
`;

export function Board() {
  const [board, resetBoard] = useBoard();

  return (
    <div className="App">
      <PaddedDiv>
        <button onClick={resetBoard}>reset</button>
      </PaddedDiv>
      <Grid>{board?.map(row => row.map(col => col))}</Grid>
    </div>
  );
}
