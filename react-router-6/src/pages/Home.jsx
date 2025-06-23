import Button from '../components/Button'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledHome = styled.div`
  color: white;
  font-size: 24px;
  background-color: ${props => props.bg_color || 'black'};
  width: 80dvw;
  height: 80dvh;
`
export default function Home(props) {
  const {children, bg_color, ...rest} = props
  return (
    <>
      <StyledHome bg_color={bg_color}>
      <Button> Button </Button>
        Home
      <Button as={Link} to='/about'> About </Button>
      </StyledHome>
    </>
  )
}