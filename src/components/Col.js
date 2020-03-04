import styled from "styled-components";

export const Col = styled.div`
  border: 1px solid orange;
  padding: 10px;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;

  &:hover {
    cursor: pointer;
    background: orange;
    color: #fff;
  }
`;
