import styled from "styled-components"

export const Container = styled.div`
  background-color: #281C4D;
  color: white;
  width:350px;
  margin: auto;
  margin-top: 50px;
  padding: 20px;
  border-radius: 20px;

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

  h2 {
    text-align: center;
    font-size: large;
  }

  @media(max-width: 400px) {
    width: 280px;
  }
  
`

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-around;

  svg {
    cursor: pointer;
    position: relative;
    top: 0;
    font-size: 2.0rem;
  }
`

export const ContainerInput = styled.label`
  display: flex;
  justify-content: space-between;
  width: 280px;
  margin-top: 5px;
`

export const Button = styled.button`

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
`