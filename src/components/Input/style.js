import styled from "styled-components";

export const Container = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 1.2em;
    margin-top: 10px;


    input {
        margin-top: 2px;
        border-radius:0px 5px;
        border: none;
        padding: 8px;
        border-bottom: 1px solid black;
    }

    input[type='file'] {
        color: black;
        border: 2px solid black;
        background-color: white;

        button {
            background-color: blue;
        }
    }
`