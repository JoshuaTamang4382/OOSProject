import React from 'react';
import { useParams } from 'react-router-dom';
import bannerImage from '../../src/assets/banner.jpg';

const MovieDetail = () => {
  const { id } = useParams(); // Get movie ID from URL (Dynamic Routing)

  // Example movie data (Replace with API data)
  const movie = {
    title: 'Oppenheimer',
    releaseYear: 2023,
    rating: 'R',
    duration: '3h',
    genre: ['Biography', 'Drama', 'History'],
    description:
      'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.',
    backgroundImage: '../../assets/banner.jpg', // Place in public/assets/
    poster: '../../assets/banner.jpg',
    cast: ['Cillian Murphy', 'Robert Downey Jr.', 'Emily Blunt', 'Matt Damon'],
  };

  return (
    <div className="relative w-full h-screen text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${movie.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Movie Content */}
      <div className="relative z-10 px-10 pt-20 flex gap-8">
        {/* Poster */}
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-64 rounded-lg shadow-lg"
        />

        {/* Movie Details */}
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold">{movie.title}</h1>
          <p className="text-gray-300 mt-2">
            {movie.releaseYear} • {movie.rating} • {movie.duration}
          </p>

          {/* Genre */}
          <div className="flex gap-3 mt-3">
            {movie.genre.map((g, index) => (
              <span
                key={index}
                className="bg-gray-800 px-3 py-1 rounded-full text-sm"
              >
                {g}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-5">
            <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg text-lg font-semibold">
              {/* <PlayIcon className="w-6 h-6" /> Play */}
            </button>
            <button className="flex items-center gap-2 bg-gray-700 hover:bg-gray-800 px-6 py-2 rounded-lg text-lg font-semibold">
              {/* <PlusIcon className="w-6 h-6" /> Watchlist */}
            </button>
          </div>

          {/* Description */}
          <p className="mt-5 text-gray-300">{movie.description}</p>

          {/* Cast */}
          <h2 className="mt-6 text-xl font-semibold">Starring:</h2>
          <p className="text-gray-400">{movie.cast.join(', ')}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
