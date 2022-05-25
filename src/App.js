import React, { useState } from 'react';

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
      <button onClick={handleClick}>Comentar</button>

      <ul>
        {allComments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
