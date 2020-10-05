import styled from '@emotion/styled'

const MainContainer: any = styled.div({
  width: window.innerWidth,
  height: window.innerHeight,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const LoginForm: any = styled.div(
  {
    padding: 32,
    width: window.innerWidth / 2,
    height: window.innerHeight / 2,
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    borderRadius: 12,
  },
  (props) => ({ backgroundColor: props.color }),
)

const H1: any = styled.h1({
  fontSize: 44,
  padding: 12,
})

export const SignUpComps = {
  MainContainer,
  LoginForm,
  H1,
}
