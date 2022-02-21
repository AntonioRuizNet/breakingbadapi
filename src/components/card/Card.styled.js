import styled from "styled-components";

export const CardStyled = styled.div`
  margin: 10px;
  padding: 1%;
  width: 20%;
  height: 230px;
`;

export const ButtonStyled = styled.button`
  background-color: white;
  border: 0px;
  cursor: pointer;
  float: right;
`;

export const ImgStyled = styled.div`
  background-image: url(${(props) => props.image});
  width: 100%;
  height: 200px;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
  box-shadow: 1px 1px 7px #cacaca;
  margin-bottom: 10px;
`;
