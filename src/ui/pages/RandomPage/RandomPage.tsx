import React from 'react';
import './RandomPage.scss';
import { useRandomPage } from './RandomPage-ViewModel';

const RandomPage = () => {
  const viewModel = useRandomPage()
  return (
    <div className="randompage">
      is RandomPage page
    </div>
  )
}

export default RandomPage;
