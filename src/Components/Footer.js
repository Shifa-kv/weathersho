import styled from "styled-components"

const Wrap = styled.footer`
background-color:#000;
padding: 10px;
margin-top:2rem;
p{
  text-align:center;
font-size:14px !important;
}
`
const Footer = () => {
  return (
    <Wrap>
      <p>WeatherSho | Copyright © 2023 by Shifa KV</p>
    </Wrap>
  )
}
export default Footer