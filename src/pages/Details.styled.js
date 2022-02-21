import styled from "styled-components";

export const CardStyled = styled.div`
  margin: 10px;
  padding: 1%;
`;

export const ImgStyled = styled.div`
  background-image: url(${(props) => props.image});
  width: 100%;
  height: 500px;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
  box-shadow: 1px 1px 7px #cacaca;
  margin-bottom: 10px;
`;
