import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Components
import { Container } from "../components/container/Container";

//Services
import { getCharacter } from "../services/requests";

//Styles
import { CardStyled, ImgStyled } from "./Details.styled";

export default function Details() {
  const { id } = useParams();
  const [character, setCharacter] = useState([]);
  useEffect(() => {
    getCharacter(id).then((res) => {
      setCharacter(res);
      console.log(res);
    });
  }, []);
  return character.map((e) => {
    return (
      <Fragment>
        <Container>
          <CardStyled key={e.char_id}>
            <div className="row">
              <div className="col-4">
                <ImgStyled image={e.img}></ImgStyled>
              </div>
              <div className="col-8">
                <p>
                  Nombre: <b>{e.name}</b>
                </p>
                <p>
                  Nick: <b>{e.nickname}</b>
                </p>
                <p>
                  Categoría: <b>{e.category}</b>
                </p>
                <p>
                  Estado: <b>{e.status}</b>
                </p>
              </div>
            </div>
          </CardStyled>
        </Container>
      </Fragment>
    );
  });
}
