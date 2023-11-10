import styled from "styled-components";

export const Container = styled.div`

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


`

export const ContainerProduct = styled.div`
    margin: auto;
    margin-top: 20px;
    display:flex;
    border-radius: 20px;
    border: 5px solid ;
    background-color: white;
    align-items: center;
    flex-direction: column;
    height: 400px;
    width:400px;

    h1 {
        color: black;
        text-align: center;
    }

    img {
        margin: auto;
        height: 300px;
        width: 300px;
    }
    @media(max-width:600px){
        margin-top: 20px;
        width: 300px;

        img {
            width: 250px;
            height: 250px;
        }
    }

`