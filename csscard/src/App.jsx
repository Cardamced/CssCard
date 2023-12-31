import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  transform: translate(65%);
`;

const Card = styled.div`
  justify-items: start;
  width: 700px;
  height: auto;
  color: #444;
  border: 1px solid grey;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0.5px 4px 5px darkgrey;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-items: start;
  border-bottom: 1px solid #ccc;
  
`;

const AlbumPicture = styled.img`
  width: 200px;
  height: auto;
  margin-right: 60px;
`;

const Title = styled.div`
  display: block;
  justify-content: centrer;
`

const UnderTitle = styled.h2`
  color: grey;
`

const ContentContainer2 = styled.div`
  display: flex;
  justify-items: start;
`

const Rate = styled.p`
  font-size: 25px;
  text-align: start;
  margin-left: 15px;
`;

const StarsDiv = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: gold;
  margin-left: 30%;
  letter-spacing: 1rem;
  span:nth-last-child(-n + 1) {
    color: lightgrey;
  }
`;

const StyledComponents = () => (
  <Container>
    <Card>
      <ContentContainer>
        <AlbumPicture
          src="https://i.discogs.com/Lfxt0jHdRcZd8nhTQyQqlfg7gL0OcxetjWzB5b0Yk94/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzNDE5/NTQzLTE1NTM4NTUw/MDAtNTkyNi5qcGVn.jpeg"
          className="AlbumPicture"
          alt="Pochette"
        />
        <Title>
          <h1>Rozes</h1>
          <UnderTitle>Under the Grave <br />(2016)</UnderTitle>
        </Title>
      </ContentContainer>
      <ContentContainer2>
        <Rate>Rate this album</Rate>
        <StarsDiv>
          <ul>
            <div className="stars">
              {Array(5).fill().map((_, index) => (
                <span key={index}>★</span>
              ))}
            </div>
          </ul>
        </StarsDiv>
      </ContentContainer2>
    </Card>
  </Container >
);

// Le code {Array(5).fill(.map((_, index) => ( <span key={index}></span> ))} crée un
// tableau de longueur 5 en utilisant la syntaxe Array(5). La méthode `fill()`
// est utilisée pour remplir le tableau avec des valeurs non définies. Ensuite, la
// méthode map() est utilisée pour parcourir chaque élément du tableau et renvoyer
// un élément < span > <span /> contenant une étoile. La prop key est définie sur
// l'index de chaque élément du tableau pour en garantir l'unicité. Ce code est
// utilisé pour générer une rangée de symboles 5 étoiles pour noter l'album.


export default StyledComponents;
