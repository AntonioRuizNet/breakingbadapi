//Styles
import React from "react";
import { PaginationStyled, PaginationBlock } from "./Pagination.styled";

export const Pagination = ({ page, maxelements, setPage }) => {
  const itemsPageVisible = maxelements / 10;
  const pageNumbers = [];
  for (let i = 0; i <= itemsPageVisible; i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationBlock>
      {pageNumbers.map((number) => (
        <a key={number} onClick={() => setPage(number)}>
          <PaginationStyled>{number + 1}</PaginationStyled>
        </a>
      ))}
    </PaginationBlock>
  );
};
