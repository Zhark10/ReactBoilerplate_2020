import React from 'react'

export const useSignUp = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [displayName, setDisplayName] = React.useState('')
  const [error, setError] = React.useState(null)
  const createUserWithEmailAndPasswordHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    email: string,
    password: string,
  ) => {
    event.preventDefault()
    setEmail('')
    setPassword('')
    setDisplayName('')
  }
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget
    if (name === 'userEmail') {
      setEmail(value)
    } else if (name === 'userPassword') {
      setPassword(value)
    } else if (name === 'displayName') {
      setDisplayName(value)
    }
  }

  return { onChangeHandler, email, password, displayName, error, createUserWithEmailAndPasswordHandler, setError }
}
