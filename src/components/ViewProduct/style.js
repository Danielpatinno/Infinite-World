import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
    background-color: white;
    text-decoration: none;
    color: black;
    height: 330px;
    width: 230px;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    transition: 0.9s;

    &:hover {
      transition: 0.9s;
      transform: scale(1.1);
    }
`

export const Image = styled.img`
    margin-top: 10px;
    margin-left: 30px;
    width: 170px;
    /* background-color: black; */
    height: 150px;
`

export const Description = styled.div`
    text-align: center;

    svg {
        font-size: 1.3em;
        margin: 5px;

        &:hover {
            color: blue;
        }
    }
`

export const ModalContainer = styled.div`

  h1 {
    color: white;
    background-color: #281C4D;
    text-align: center;
  }

  p {
    font-size: larger;
  }

  button {
    width: 75px;
    cursor: pointer;
  }

  button.enviar {
    /* display: flex;
    justify-content: center;
    margin: auto; */
    background-color: green;
    color: white;
    padding: 5px;
    border-radius: 5px;

    &:hover {
      border: 3px solid black;
    }
  }


  button.cancel {
    padding: 5px;
    border-radius: 5px;
    background-color: gray;

    &:hover {
      color: white;
    }
  }

  button.confirm {
    padding: 5px;
    border-radius: 5px;
    background-color: red;
    transition: 0.4s;

    &:hover {
      color: white;
      transform: scale(1.09);
    }
  }

`