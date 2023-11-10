import styled from "styled-components";

export const Tittle = styled.h1`
    text-align: center;
    margin: auto;
    color: white;
`

export const Container = styled.div`
    height: 450px;
    margin: auto;
`

export const Formulário = styled.form`
    width: 330px;
    height: 250px;
    margin: auto;
    margin-top: 50px;
    padding: 15px;
    background-color: #281C4D;
    color: white;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    border: 2px solid;

    h3 {
        text-align: center;
    }
    
`

export const ButtonSubmit = styled.input`
    /* justify-content: center; */
    cursor: pointer;
    color: #3E3C3C;
    width: 100px;
    padding: 4px;
    border-radius: 10px;
    border: 2px solid black;
    box-shadow: inset 3px 2px 0px 0px #8FAADC;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 20px;

    &:hover {
        cursor: pointer;
        color: #8FAADC;
        border: 1px solid #8FAADC;
    }
`

export const Button = styled.button`
    width: 100px;
    padding: 4px;
    border-radius: 5px;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        background-color: gray;
        color: white;
    }
`