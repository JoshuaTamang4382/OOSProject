import React from 'react';
import { Routes, Route, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import MovieDetail from '../pages/MovieDetail';
import Login from '../pages/Login';
export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/:id',
    element: <MovieDetail />,
  },
]);
