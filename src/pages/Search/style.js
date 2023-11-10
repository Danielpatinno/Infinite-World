import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    h2 {
      text-align: center;
    }

`

export const Title = styled.div`
    color: black;
    margin-top: 20px;

    svg {
      position: absolute;
      left: 5px;
      top: 160px;
      font-size:2.5em;
      border-radius: 20px;

      &:hover {
        color: blue;
        transition: .8s;
      }
    }


`