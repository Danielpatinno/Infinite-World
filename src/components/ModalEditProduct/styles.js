import { styled } from "styled-components"

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