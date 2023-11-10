import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
    text-decoration: none;
    width: 290px;
    padding: 5px;
    border-bottom: 1px solid black;
    border-radius: 5px;
    margin-top: 3px;
    background-color: #281C4D;
    color: white;
    display: grid;
    grid-template-columns: 50px 150px 40px;
    gap: 10px;
    grid-row-gap: 20px;

    &:hover {
      box-shadow: 0 0 5px rgba(0, 0, 0, 70);
      transition: box-shadow 0.3s ease;
    }

    .profileImage {
        border-radius: 50%;
        background-color: black;
    }

    .buttons {
        display: flex;
        margin: auto;

        svg {
            color: white;
            cursor: pointer;

            &:hover {
                color: blue;
            }
        }
    }
`

export const Button = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    height: 8px;
    margin-top: 15px;

    &:hover {
        color: blue;
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