import { Link } from "react-router-dom";

//Styles
import { CardStyled, ButtonStyled, ImgStyled } from "./Card.styled";

export const Card = ({ info }) => {
  return (
    <CardStyled key={info.char_id}>
      <ImgStyled image={info.img}></ImgStyled>
      {info.name.length > 20 ? `${info.name.substring(0, 20)}..` : info.name}
      <ButtonStyled>
        <Link to={`/details/${info.char_id}`}>Detalles</Link>
      </ButtonStyled>
    </CardStyled>
  );
};
