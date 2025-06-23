import styled from "styled-components"
import { Link } from "react-router-dom"

const StyledAbout = styled.div`
  color: white;
  font-size: 24px;
  background-color: ${props => props.bg_color || 'black'};
  width: 80dvw;
  height: 80dvh;
`

const StyledLink = styled(Link)`
  display: inline-block;
  color: white;
  background-color: black;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  margin: 10px;
  `
  

export default function Home() {
  return (
    <StyledAbout bg_color="#d3adf7">
      About
      <br />
      <StyledLink to="/">Home</StyledLink>
    </StyledAbout>
  )
}