import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: gap;
  justify-content: space-around;
  display: grid;
  grid-template-columns: auto auto  ;
  row-gap: 10px;
  grid-gap: 10px;
`

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 12px;
  /* justify-content: center; */

  p {
    font-family: Poppins;
    font-weight: bold;
    font-size: 25px;
  }
`

export const ImageContainer = styled.div`
  margin-top: 40px;
  border-radius: 50%;
  border: 20px solid #281C4D;

  img {
    width: 500px;
    margin-top: 7px;
    border-radius: 50%; 
  }

  @media(max-width:700px) {
    width: 600px;
  }
`