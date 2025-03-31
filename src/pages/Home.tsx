import { Col, Row } from 'antd';
import React, { useEffect } from 'react';
import bannerImage from '../../src/assets/banner.jpg';
import movie1 from '../../src/assets/movie1.jpg';
import movie2 from '../../src/assets/movie2.jpeg';
import movie3 from '../../src/assets/movie3.jpeg';
import { httpClient } from '../lib/api';
import { useNavigate } from 'react-router-dom';

const movies = [
  { title: 'The Socaial Network', image: movie1 },
  { title: 'A Beautiful Mind', image: movie2 },
  { title: 'Oppenheimer', image: movie3 },
  { title: 'Oppenhieimer', image: movie1 },
];
const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    fetchHandler();
  }, []);

  const fetchHandler = async () => {
    const response = await httpClient.GET('movies/list/', true);
    console.log(response, 'response from list');
  };
  return (
    <Row>
      <Col span={24}>
        <div className="bg-black text-white">
          {/* Header */}
          <header className="flex justify-between items-center p-4 bg-black bg-opacity-50 absolute w-full z-10">
            <h1 className="text-3xl font-bold text-red-600">Pyflix</h1>
            <button
              className="bg-red-600 px-4 py-2 rounded"
              onClick={() => navigate('/')}
            >
              Logout
            </button>
          </header>

          {/* Hero Section */}
          <section
            className="banner relative h-screen bg-cover bg-center"
            style={{
              backgroundImage: `url(${bannerImage})`,
              minHeight: '70vh',
              backgroundRepeat: 'no-repeat',
              width: '100%',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="text-center">
                <h2 className="text-4xl font-bold mb-4">Welcome to Pylix</h2>
                <button className="bg-red-600 px-6 py-3 rounded text-xl">
                  Watch Now
                </button>
              </div>
            </div>
          </section>

          {/* Movie List */}
          <section className="trending-now-section">
            <h2 className="text-xl font-semibold mb-4">Trending Now</h2>
            <div className="trending-wrapper">
              {movies.map((movie, index) => (
                <div key={index} className="trending-item">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full rounded-lg shadow-lg hover:opacity-80"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center text-xl font-semibold text-white">
                    {movie.title}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </Col>
    </Row>
  );
};

export default Home;
