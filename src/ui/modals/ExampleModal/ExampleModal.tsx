import React, { FC }  from 'react';
import './ExampleModal.scss';
import { useExampleModal } from './ExampleModal-ViewModel';

export const ExampleModal: FC  = () => {
  const viewModel = useExampleModal()
  const {closeModal} = viewModel;
  return (
    <div className="examplemodal">
      is ExampleModal modal
      <button onClick={closeModal}>Close</button>
    </div>
  )
}
