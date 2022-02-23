import React from 'react'
import { useForm } from 'react-hook-form'

export const useViewModel = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [displayName, setDisplayName] = React.useState('')
  const [error, setError] = React.useState(null)
  const { handleSubmit, register, errors } = useForm()
  const onSubmit = (values: any) => console.log(values)
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
    const actions: { [key: string]: React.Dispatch<React.SetStateAction<string>> } = {
      userEmail: setEmail,
      userPassword: setPassword,
      displayName: setDisplayName,
    }

    if (actions.hasOwnProperty(name)) {
      actions[name](value)
    }
  }

  return {
    onChangeHandler,
    email,
    password,
    displayName,
    error,
    createUserWithEmailAndPasswordHandler,
    setError,
    form: {
      handleSubmit,
      register,
      errors,
      onSubmit,
    },
  }
}
