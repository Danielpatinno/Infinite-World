import { 
  Container, 
  ImageContainer, 
  TextContainer } from "./styles"

const Home = () => {

  return (
    <Container>
      <TextContainer>
        <p>O máximo de qualidade em diversos produtos tupperware.</p>
      </TextContainer>
      <ImageContainer>
        <img 
          src='https://cdn.awsli.com.br/800x800/0/239/produto/12801075/f04c040ebe.jpg' 
          alt="tupper" 
        />
      </ImageContainer>
    </Container>
  )
}

export default Home;