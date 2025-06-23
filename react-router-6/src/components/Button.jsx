import styled from "styled-components"

const StyledButton = styled.button`
  display: inline-block;
  color: white;
  background-color: black;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  margin: 10px;
`

export default function Button(props) {
  const {children, ...rest} = props
  return (
    <StyledButton {...rest}>{children}</StyledButton>
  )

}