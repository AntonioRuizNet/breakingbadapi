import React, { Fragment, useState, useEffect } from "react";

//Components
import { Card } from "../components/card/Card";
import { Pagination } from "../components/pagination/Pagination";
import { Navigation } from "../components/navigation/Navigation";

//Styles
import "bootswatch/dist/yeti/bootstrap.min.css";
import { MainStyled } from "./Main.styled";

//Services
import { getAllCharacters } from "../services/requests";

export default function Main() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(0);
  const [itemsPage, setItemsPage] = useState(12);

  useEffect(() => {
    getAllCharacters().then((res) => {
      setCharacters(res);
      console.log(res);
    });
  }, [page]);

  const changePage = (pag) => {
    setPage(pag);
  };

  return (
    <Fragment>
      <Navigation />
      <MainStyled>
        {characters.length > 0 &&
          characters
            .filter((el, index) => {
              return index > page * 10 - 1 && index < page * 10 + itemsPage;
            })
            .map((e) => {
              return <Card info={e} />;
            })}
      </MainStyled>
      <Pagination
        page={page}
        maxelements={characters.length}
        setPage={changePage}
      />
    </Fragment>
  );
}
