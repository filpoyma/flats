import React from 'react';
import entities from './api/entities';
import Card from './components/Card';
import './styles/style.css';

const App = () => {
  const [flats, setFlats] = React.useState(entities.response);

  const onClickLikeHandler = id => {
    setFlats(prev => prev.map(flat => ({ ...flat, isLiked: id === flat.id ? !flat.isLiked : flat.isLiked })));
  };
  return (
    <div className="container">
      {flats.map(card => (
        <Card key={card.id} card={card} onClickLikeHandler={onClickLikeHandler} />
      ))}
    </div>
  );
};

export default App;
