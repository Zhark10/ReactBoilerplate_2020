import React, { FC } from 'react';
import './Home.scss';
import { useHome } from './Home-ViewModel';
import { Preloader } from '../../shared/Preloader/Preloader';

const Home: FC = () => {
  const viewModel = useHome()
  if (!viewModel.data) return <Preloader/>
  
  return (
    <div className="home">
      is Home page
    </div>
  )
}

export default Home;
