import styled from "styled-components";

export const Form = styled.form`
    margin: auto;
    width: 400px;
    height: 420px;
    padding: 20px;
    background-color: #281C4D;
    border-radius: 15px;
    color: white;
    margin-top: 25px;    

    @media (max-width: 600px) {
        width: 290px;
    }
    
    p {
        margin-top: -4px;
        text-align: center;
        font-size: 1.3em;
        font-weight: bold;
    }



`

export const Button = styled.button`
    cursor: pointer;
    color: #3E3C3C;
    text-align: center;
    width: 100px;
    padding: 4px;
    border-radius: 10px;
    border: 2px solid black;
    box-shadow: inset 3px 2px 0px 0px #8FAADC;
    margin-top: 10px;
    position: relative;
    left: 150px;


    &:hover {
        color: #8FAADC;
        border: 1px solid #8FAADC;
    }

    @media (max-width: 600px) {
        left: 90px;
    }
`