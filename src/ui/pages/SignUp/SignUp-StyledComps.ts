import styled from '@emotion/styled'

const MainContainer = styled.div({
  width: window.innerWidth,
  height: window.innerHeight,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const LoginForm = styled.div(
  {
    padding: 32,
    width: window.innerWidth / 3,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 12,
  },
  (props) => ({ backgroundColor: props.color }),
)

const H1 = styled.h1({
  fontSize: 44,
  padding: 12,
})

const Form = styled.form({
  padding: 12,
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})

const Input = styled.input({
  padding: 8,
})

export const SignUpComps = {
  MainContainer,
  LoginForm,
  Form,
  H1,
  Input,
}
