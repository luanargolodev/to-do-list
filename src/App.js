import React, { useState } from 'react';
import { Button } from './styles';

import People from './assets/people.svg';

const App = () => {
  const [comment, setComment] = useState('');
  const [allComments, setAllComments] = useState([]);

  function handleClick() {
    setAllComments([...allComments, comment]);
  }

  return (
    <div>
      <img src={People} alt="Pessoas conversando" />
      <textarea onChange={({ target }) => setComment(target.value)}></textarea>
      <Button onClick={handleClick}>Comentar</Button>

      <ul>
        {allComments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
