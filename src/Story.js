import React from 'react';
import grannyImage from './images/granny.png';

const Story = ({ onNext }) => {
  return (
    <div>
      <p>
        You stumble upon an adorable cottage hidden deep in the forest. Inside, you find Cat Granny, who greets you with a mischievous grin.
      </p>
      <img src={grannyImage} alt="Cat Granny" style={{ maxWidth: '200px', display: 'block', margin: '20px auto' }} />
      <p>
        "Welcome! I've got just the magical cat for you. Answer these quick questions to find out which one!"
      </p>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default Story;