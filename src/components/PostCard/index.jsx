import P from 'prop-types';
import { IoSkull } from 'react-icons/io5';

import * as Styled from './style';

export const PostCard = ({ id, name, status, species, type, gender, origin, location, image, singleCharacter }) => {
  return (
    <Styled.PostCardWrapper $gender={gender} $singleCharacter={singleCharacter}>
      <img src={image} alt={name} />
      <Styled.PostCardContent>
        <h2> {name} </h2>
        {status === 'Dead' && <IoSkull size={25} color="var(--accent)" />}
        <p>
          <strong>{location}</strong>
        </p>
        {/*
        <p>
          <strong>Type:</strong> {type || 'N/A'}
        </p>
        <p>
          <strong>{origin}</strong>
        </p>
        <p>
          <strong>Species:</strong> {species}
        </p>
      */}
      </Styled.PostCardContent>
    </Styled.PostCardWrapper>
  );
};

PostCard.propTypes = {
  id: P.number.isRequired,
  name: P.string.isRequired,
  status: P.string.isRequired,
  species: P.string.isRequired,
  type: P.string,
  gender: P.string.isRequired,
  origin: P.string.isRequired,
  location: P.string.isRequired,
  image: P.string.isRequired,
  singleCharacter: P.bool.isRequired,
};
