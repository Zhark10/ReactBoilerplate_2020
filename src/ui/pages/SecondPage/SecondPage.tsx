import React from 'react';
import './SecondPage.scss';
import { useSecondPage } from './SecondPage-ViewModel';

const SecondPage = () => {
  const viewModel = useSecondPage()
  return (
    <div className="secondpage">
      is SecondPage page
    </div>
  )
}

export default SecondPage;
