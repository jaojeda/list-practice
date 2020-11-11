import React from 'react';

const Character = ({ image, name, status }) => (
  <div>
    <img src={image} alt={name} />
    <figcaption>
      <p>{name}</p>
      <p>{status}</p>
    </figcaption>
  </div>
);

export default Character;
