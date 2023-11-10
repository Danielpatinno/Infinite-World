import styled from "styled-components";

export const Container = styled.label`
    display: flex;
    font-size: 1.2em;
    margin-top: 50px;
    margin-left: 5px;

    button {
        cursor: pointer;
         border: none;
         border-radius: 10px;
         background-color: white;

        &:hover {
            color: blue;
        }
    }

    input {
        height: 25px;
        width: 350px;
        margin-right: 30px;
        border-radius:0px 5px;
        border: none;
        padding: 8px;
        border-bottom: 1px solid black;

        @media (max-width: 600px) {
            width: 230px;
        }
    }
`