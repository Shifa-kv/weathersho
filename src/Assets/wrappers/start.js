import styled from 'styled-components'
import img from '../images/dummy.jpg'

const Wrapper = styled.section`
height: 100vh;
margin-bottom: 0;
background-image: linear-gradient(90deg, rgba(57,77,96,1) 0%, rgba(148,187,233,0.2377684350107231) 100%),url(${img});
background-size: cover;
background-position: center;
color:#fff;

.start-data {
  display: flex;
  align-items: center;
}
h1 {
  font-size: 100px;
  line-height: 100px;
  margin:0;
}
.unit{
  font-size: 46px;
}
.start-data>* {
  padding: 0 10px;
  margin-bottom: 2rem;
}
h3 {
  font-size: 50px;
  font-weight: bold;
  margin: 0px;
}
span{
    font-size:16px;
    text-transform: capitalize;
}
.start-data>* {
  padding: 0 10px;
}
h3 {
  font-size: 50px;
  font-weight: bold;
  line-height: 50px;
  margin-bottom: 0;
}
.start-cloud svg {
	display: block;
    margin-bottom: 6px;
    margin-top: 6px;
}

button {
    border: unset;
    padding: 8px 20px;
    width: 100px;
    color: rgb(255, 255, 255);
    font-weight: bolder;
    border-radius: 5px;
    background-color: rgba(61, 61, 61, 0.4);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
}
button:hover {
	box-shadow: 0px 0px 30px 0px #ddd;
}
.start-cloud img {
	display: block;
}

@media screen and ( max-width:800px ){
  .start-data {
    display: block !important;
}
}

`
export { Wrapper }