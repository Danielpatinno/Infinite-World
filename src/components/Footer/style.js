import styled from "styled-components"

export const Container = styled.div`
    display: block;
    color: white;
    line-height: 8px;
    text-align: center;
    padding: 5px;
    background-color: #281C4D;
    height: 160px;

    svg {
        font-size: 25px;
        color: white;
        transform: scale();

        &:hover {
          color: blue;
          transition: 0.4s;
        }
    }
`