import React, { FC } from 'react';
import './Home.scss';
import { useHome1 } from './Home';

const Home: FC = () => {
  const viewModel = useHome1()
  return (
    <div className="home">
      is Home page
    </div>
  )
}

export default Home;