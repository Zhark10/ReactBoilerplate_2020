import React, { FC } from 'react'
import { useExampleModal } from './ExampleModal-ViewModel'

import { Colors } from 'utils/schema/colors'

export const ExampleModal: FC = () => {
  const viewModel = useExampleModal()
  const { closeModal } = viewModel
  return (
    <div
      style={{
        backgroundColor: Colors.background.main,
        width: '375px',
        height: '375px',
        borderRadius: '10px',
        boxShadow: '0px 0px 32px rgba(0, 0, 0, 0.25)',
        padding: 8,
      }}
    >
      is ExampleModal modal
      <button onClick={closeModal}>Close</button>
    </div>
  )
}
