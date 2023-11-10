import Modal from 'react-modal'

import { ModalContainer } from "./styles"

const ModalEditProduct = () => {

  return (
    <div>
    <Modal         
        title="Atenção"          
        style={{
          overlay: {
            margin:"auto"
          },
          content: {
            margin:"auto",
            top: '200px',
            bottom: '280px',
            border: '1px solid black',
            background: '#fff',
            borderRadius: '20px',
            width:"600px",
            maxWidth:'600px'
          }
        }}
      >
        <ModalContainer>
          <h1>Editar Produto</h1>
          <label>
            Nome Produto:
            <input type="text" value={''}/>
          </label>
        </ModalContainer>
      </Modal>
    </div>
  )
}

export default ModalEditProduct