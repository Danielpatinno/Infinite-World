import styled from "styled-components";

export const ContainerPrincipal = styled.div`
    height: 500px;

    svg {
      color: #281C4D;

      &:hover {
        cursor: pointer;
        color: blue;
      }
    }
    p.res {
        font-size: 1.2em;
        font-weight: bold;
        color: black;
    }
`
export const ContainerInput = styled.div`
    margin-top: 32px;
    margin-left: 5px;
    display: flex;

    h2 {
        color: white;
    }

    p {
        font-size: 1.2em;
        font-weight: bold;
        margin-top: 5px;
        position: absolute;
    }
`

export const Container = styled.div`
  width: 500px;
  max-height: 415px;
  overflow-y: auto;
  border: 2px solid black;
  display: flex;
  margin: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
  background-color:  #281C4D;
  border-radius: 6px;
}
`

export const SvgContainer = styled.div`
  position: absolute;
  margin-left: -60px;
  color: #281C4D;
`

export const TableContainer = styled.table`
  width: 100%;
  margin: auto;

  thead {
    background-color: #281C4D;
    color: white;
  }

  td {
    text-align: center;
  }

  tr {
    &:hover {
        cursor: pointer;
        color: white;
        background-color: gray;
    }
  }

  td.tdDelete {
    display: flex;
    justify-content: space-between;
    text-align: center;

    div{
        display: flex;
    }

    svg {
      cursor: pointer;
      display: flex;
      justify-content: center;
      font-size: 20px;

      &:hover {
        color: #281C4D;
      }
    }
  }

`

export const ModalContainer = styled.div`

  h1 {
    color: white;
    background-color: #281C4D;
    text-align: center;
  }

  p {
    font-size: larger;
  }

  button {
    width: 75px;
    cursor: pointer;
  }

  button.cancel {
    padding: 5px;
    border-radius: 5px;
    background-color: gray;

    &:hover {
      color: white;
    }
  }

  button.confirm {
    padding: 5px;
    border-radius: 5px;
    background-color: red;
    transition: 0.4s;

    &:hover {
      color: white;
      transform: scale(1.09);
    }
  }
`
