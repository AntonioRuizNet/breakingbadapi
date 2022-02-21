import styled from "styled-components";

export const PaginationStyled = styled.div`
  border: 1px lightgrey solid;
  padding: 5px 20px;
  cursor: pointer;
  &:hover {
    background-color: lightgrey;
  }
`;

export const PaginationBlock = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  margin-top: 40px;
  width: 35%;
`;
