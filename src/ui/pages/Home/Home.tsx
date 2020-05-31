import React from 'react';
import './Home.scss';
import { useHome } from './Home-ViewModel';

const Home = () => {
  const viewModel = useHome()
  return (
    <div className="home">
      is Home page
    </div>
  )
}

export default Home;
