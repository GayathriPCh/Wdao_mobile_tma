import React from 'react';
import styled from 'styled-components';

// Sample card data (replace with your actual images, text, title, date, and links)
const cards = [
  { 
    id: 1, 
    imageUrl: 'https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=717/https://s3.cointelegraph.com/storage/uploads/view/b5f8b92626b253df6dd1ea74f55720cf.jpg', 
    title: 'Event 1',
    date: '2024-06-21',
    link: 'https://example.com/event1'
  },
  { 
    id: 2, 
    imageUrl: '/path/to/image2.jpg', 
    title: 'Event 2',
    date: '2024-06-22',
    link: 'https://example.com/event2'
  },
  // Add more cards as needed
];

const Digiboard: React.FC = () => {
  const handleCardClick = (link: string) => {
    window.open(link, '_blank'); // Open link in a new tab
  };

  const handleBackButtonClick = () => {
    window.history.back();
  };

  return (
    <Container>
      <BackButton onClick={handleBackButtonClick}>Back</BackButton>
      <CardGrid>
        {cards.map(card => (
          <ClickableCard key={card.id} onClick={() => handleCardClick(card.link)}>
            <Card imageUrl={card.imageUrl}>
              <Overlay />
              <CardContent>
                <CardTitle>{card.title}</CardTitle>
                <CardDate>{card.date}</CardDate>
              </CardContent>
            </Card>
          </ClickableCard>
        ))}
      </CardGrid>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  width: 100%;
  min-height: 100vh; /* Ensure the container takes at least the full viewport height */
  display: flex;
  flex-direction: column; /* Align items vertically */
  align-items: flex-start; /* Align items to the left */
  justify-content: flex-start; /* Align content to the top */
  background-color: #111;
  padding: 20px; /* Add padding to separate from edges */
`;

const BackButton = styled.button`
  font-size: 1.2rem;
  padding: 1rem 2.5rem;
  border: none;
  outline: none;
  border-radius: 0.4rem;
  cursor: pointer;
  text-transform: uppercase;
  background-color: rgb(14, 14, 26);
  color: rgb(234, 234, 234);
  font-weight: 700;
  transition: 0.6s;
  box-shadow: 0px 0px 60px #1f4c65;
  -webkit-box-reflect: below 10px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4));

  &:active {
    transform: scale(0.92);
  }

  &:hover {
    background: rgb(2, 29, 78);
    background: linear-gradient(270deg, rgba(2, 29, 78, 0.681) 0%, rgb(112, 255, 3) 60%);
    color: rgb(4, 4, 38);
  }

  /* Position the button at top left */
  position: absolute;
  top: 20px; /* Adjust top position */
  left: 20px; /* Adjust left position */
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Responsive grid: minimum 250px width, expand columns */
  gap: 20px;
  max-width: 1200px;
  width: 100%;
  padding: 20px;
  margin: 0 auto; /* Center the grid horizontally */
`;

const ClickableCard = styled.div`
  cursor: pointer;
`;

const Card = styled.div<{ imageUrl: string }>`
  position: relative;
  overflow: hidden;
  padding-top: 120%; /* Creates a bigger square aspect ratio */
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60%; /* Adjust the height of the color overlay */
  background: linear-gradient(to top, rgba(0, 255, 255, 0.8), transparent); /* Gradient to fade upwards */
`;

const CardContent = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  text-align: center;
  padding: 10px;
  color: #fff;
`;

const CardTitle = styled.h3`
  font-size: 1.5em;
  font-weight: bold;
  margin: 0;
`;

const CardDate = styled.p`
  font-size: 0.8em;
  margin: 5px 0;
`;

export default Digiboard;
