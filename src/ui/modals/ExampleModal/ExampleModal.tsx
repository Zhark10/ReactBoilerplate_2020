import React, { FC } from 'react'
import { useExampleModal } from './ExampleModal-ViewModel'

import './ExampleModal.module.scss'

export const ExampleModal: FC = () => {
  const viewModel = useExampleModal()
  const { closeModal } = viewModel
  return (
    <div className="examplemodal">
      is ExampleModal modal
      <button onClick={closeModal}>Close</button>
    </div>
  )
}
