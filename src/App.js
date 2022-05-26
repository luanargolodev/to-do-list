import React, { useState } from 'react';
import { Container, Button } from './styles';

import People from './assets/people.svg';

const App = () => {
  const [comment, setComment] = useState('');
  const [allComments, setAllComments] = useState([]);

  function handleClick() {
    if (comment === '') return;

    setAllComments([...allComments, comment]);
  }

  return (
    <Container>
      <img src={People} alt="Pessoas conversando" />
      <textarea onChange={({ target }) => setComment(target.value)}></textarea>
      <Button isOn={comment} onClick={handleClick}>
        Comentar
      </Button>

      <ul>
        {allComments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </Container>
  );
};

export default App;
