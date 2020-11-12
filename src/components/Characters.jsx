import React from 'react';
import Character from './Character';

const Characters = ({ characters }) => {
  const elementList = characters.map(({ image, name, status }) => (

    <li key={name}>
      <Character image={image} name={name} status={status} />
    </li>
  ));

  return (
    <ul>
      {elementList}
    </ul>
  );
};

export default Characters;