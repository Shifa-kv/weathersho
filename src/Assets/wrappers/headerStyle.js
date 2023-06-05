import styled from "styled-components";

const Wrapper = styled.section `
.logo{
  color:#fff;
  border-bottom: 1px solid rgb(255, 220, 138);
  border-top: 1px solid rgb(255, 220, 138);
  width:max-content;
}
.headerRight{
    display:flex;
    justify-content: flex-end;
}
.sidebar {
    width: max-content;
    background-color: unset;
    box-shadow: unset;
}
.searchbar svg {width: 26px;}
.searchbar {
    align-items: center;
    align-self: center;
    margin-right: 10px;
    border: 1px solid rgb(59, 79, 108);
    border-radius: 5px;
    width: 100%;
}
.searchbar > div {
	width: 100%;
}
input {
    padding: 5px 10px !important;
    height: 30px !important;
    color:rgb(59, 79, 108);
}

.searchData {
  position: absolute;
  background-color: rgb(32, 43, 59);
  top: 100%;
  margin-top: 0;
  border: 1px solid rgb(59, 79, 108);
  padding: 5px;
  list-style: none;
  width: 96%;
}
.searchData li {
  padding: 5px 20px;
}
.searchData li {
  border-bottom: 1px solid rgb(59, 79, 108);
  font-size: 16px;
  cursor: pointer;
}

.unitSelector {
  display: flex;
  height: 40px !important;
  color: rgb(59, 79, 108);
  margin: auto 10px;
  border: 1px solid rgb(59, 79, 108);
  border-radius: 6px;

}

.unitSelector>button {
  border: unset;
  background: unset;
  color: #fff;
  padding: 0 10px;
  cursor: pointer;
}
.unitSelector > button.active {
  background-color: #ffdc8a;
  border-radius: 6px;
  color: #0b131e;
  font-weight: bold;
}
button{
  background: unset;
  border: unset;
}


@media (max-width: 768px) {
  .searchbar{
    margin-bottom:10px;
  }
  
}


`
export {Wrapper}