import { useForm } from 'react-hook-form'

export const useSignIn = () => {
  const { handleSubmit, register, errors } = useForm()
  const onSubmit = (values: any) => console.log(values)

  return {
    form: {
      handleSubmit,
      register,
      errors,
      onSubmit,
    },
  }
}
