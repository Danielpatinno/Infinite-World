import { styled } from "styled-components";

export const Container = styled.div`
    height: 540px;
    display: flex;
    flex-direction: column;
    margin: auto;
    align-items: center;
    border: 2px solid #281C4D;
    width: 320px;

    svg {
      position: absolute;
      left: 5px;
      top: 195px;
      font-size:2.5em;
      border-radius: 20px;

      &:hover {
        color: blue;
        transition: .8s;
      }
    }

    img {
      height: 200px;
      width: 200px;
    }


    form {
      padding: 20px;
      color: #281C4D;
      width: 300px;
    }

    input[type='submit'] {
        cursor: pointer;
        display: flex;
        margin: auto;
        justify-content: center;
        margin-top: 10px;
        width: 100px;
        padding: 4px;
        border-radius: 10px;
        border: 2px solid black;
        box-shadow: inset 3px 2px 0px 0px #8FAADC;
        margin-bottom: -10px;

        &:hover {
            box-sizing: border-box;
            color: #8FAADC;
            border: 1px solid #8FAADC;
        }

        @media (max-width: 600px) {
            left: 90px;
        }
    } 

`

export const ContainerInput = styled.div`
  height: 60px;
  border-bottom: 1px solid black;

  label {
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    font-size: large;
  }

  input {
    font-size: medium;
    margin-top: 5px;
    border-radius:0px 5px;
    border: none;
    padding: 8px;
    border-bottom: 1px solid black;
  }
`
