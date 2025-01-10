// Atualização para Posts
import P from 'prop-types';

import { PostCard } from '../PostCard';
import { CardsContainer } from './style';

export const Posts = ({ posts = [], size }) => {
  const singleCharacter = size === 1;
  return (
    <CardsContainer>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          name={post.name}
          status={post.status}
          species={post.species}
          type={post.type}
          gender={post.gender}
          origin={post.origin.name}
          location={post.location.name}
          image={post.image}
          singleCharacter={singleCharacter}
        />
      ))}
    </CardsContainer>
  );
};

Posts.propTypes = {
  posts: P.arrayOf(
    P.shape({
      id: P.number.isRequired,
      name: P.string.isRequired,
      status: P.string.isRequired,
      species: P.string.isRequired,
      type: P.string.isRequired,
      gender: P.string.isRequired,
      origin: P.shape({
        name: P.string.isRequired,
      }).isRequired,
      location: P.shape({
        name: P.string.isRequired,
      }).isRequired,
      image: P.string.isRequired,
    }),
  ),
  size: P.number.isRequired,
};
