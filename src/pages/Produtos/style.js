import styled from "styled-components";

export const Container = styled.form`
    margin-top: 17px;
    display: flex;
    align-items: center;

    p {
        margin-top: -10px;
        position: absolute;
        font-size: 1.2em;
        font-weight: bold;
    }
`

export const ContainerProduct = styled.div`
    margin-top: 10px;
    justify-content: space-around;
    display: grid;
    grid-template-columns: auto auto auto auto auto ;
    row-gap: 10px;

    h1 {
        color: white;
    }

    @media (max-width: 1200px) {
        grid-template-columns: auto auto auto auto;
    }

    @media (max-width: 920px) {
        grid-template-columns: auto auto auto;
    }

    @media (max-width: 800px) {
        grid-template-columns: auto auto;
    }

    @media (max-width: 600px) {
        grid-template-columns: auto;
    }
    
`