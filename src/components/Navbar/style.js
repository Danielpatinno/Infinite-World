import styled from "styled-components"

export const Div = styled.div`
    padding: 5px;
    background-color: #281C4D;
    height: 143px;
    display: flex;

    h2 {
        font-size: 2em;
        color: white;
        text-align: center;
        position: absolute;
        justify-content: center;
        align-items: center;
        left: 70px;
    }    
`

export const Barra = styled.div`
    position: relative;
    top:110px;
    height: 20px;
    display: flex;
    
`

export const Button = styled.button`
    cursor: pointer;
    color: #3E3C3C;
    height: 27px;
    text-align: center;
    width: 100px;
    padding: 4px;
    border-radius: 10px;
    border: 2px solid black;
    box-shadow: inset 3px 2px 0px 0px #8FAADC;


    &:hover {
        cursor: pointer;
        color: #8FAADC;
        border: 1px solid #8FAADC;
    }
`

export const Grupo = styled.div`
    display: flex;
    flex-direction:column ;

    div {
        display: none;
    }

    &:hover > div{
        display: flex;
        flex-direction: column;

    }
`

export const Logo = styled.div`
    margin-top: 20px;
    position: absolute;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: white;
`

export const Information = styled.div`
    margin-top: 80px;
    position: absolute;
    right: 10px;
    color: white;
    line-height: 15px;

    p{  
        position: relative;
        display: flex;
    }
`
