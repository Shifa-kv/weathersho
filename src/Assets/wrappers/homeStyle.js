import styled from "styled-components";

const Wrapper =  styled.section `
.banner{
    background-position: top center;
    border:1px solid rgb(59, 79, 108);
    border-radius:10px;
    min-height: 350px;
    display:flex;
    flex-direction: column;
    color:#fff;
    padding:30px;
    justify-content: space-between;
    text-transform: capitalize;
    background-size: 100%;
}
.banner h1{
    font-size: 100px;
    margin: 0;
    line-height: 100px;
    color:rgb(255, 220, 138);
}
.todayData {
  display: flex;
justify-content: space-evenly;
    box-shadow: 0px 0px 12px 5px #000 ;
    border-radius: 10px;
    
  background-color: #202b3b;
    padding:20px
}

.todayData>div {
    display: flex;
    padding: 20px 20px;
}
.todayData>div:not(:first-child){
    border-left:1px solid rgb(59, 79, 108) ;
}
.banner .unit{
    font-size: 40px;
}

/* hourlyforecast */

.forecastbox{
    box-shadow: #000  0px 0px 12px 5px;
border-radius: 10px;
padding: 20px;
background-color: #202b3b;
text-align: center;
}
.forecastbox h3{
    border-bottom: 1px solid #3b4f6c;
    margin-top: 0;
    padding-bottom: 10px;
    color:rgb(255, 220, 138);
}

.TodayForecast {
  display: flex;
  overflow-x: auto;
  padding-bottom: 20px;
  overflow: visible;
  justify-content: center;
}
.TodayForecast>div {
  padding: 0px 20px;
  text-align: center;
  min-width: max-content;
}
.TodayForecast>div:not(:last-child) {
  border-right: 1px solid rgb(59, 79, 108);

}
.tooltip {
  position: absolute;
  top: 68%;
  width: max-content;
  background-color: #0b131e;
  z-index: 2;
  left: -10px !important;
  border-radius: 6px;
  right:  -10px !important;
  border: 1px solid #444;
  box-shadow: 0px 0px 10px 2px #000;
}
.tooltip li:first-child{
    font-weight:600;
    padding-bottom: 5px;
}
.tooltip::before {
	content: ' ';
	width: 20px;
	height: 10px;
	clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
	background-color: #444;
	display: block;
	position: absolute;
	left: 0;
	right: 0;
	margin: auto;
	bottom: 100%;
}
.TodayForecast >div {
  position: relative;
}
.tooltip li {
    text-transform: capitalize;
  list-style: none;
  font-size: 12px;
}
.tooltip ul {
  padding: 8px;
  margin: 0;
}

/* weeklyforecast */
.weekHours {
    display: flex;
    justify-content: space-evenly;
    width:100%
}
.WeekForecast{
  display:flex;
}

.weekHours>div,.weekDay {
    text-align: center;
    padding: 0 20px;
    width: 100%;
}
.weekDay {
    font-weight: bold;
}
.weekHours>div:not(:last-child) {
border-right: 1px solid rgb(59, 79, 108);
}
.weekHours{
  overflow-x: auto;

}
.WeekForecast {
  background-color: #202b3b;
border-top-left-radius: 10px;
border-bottom-left-radius: 10px;
margin-bottom: 5px;
border: 1px solid rgb(59, 79, 108);
overflow: hidden;

}

.TodayForecast p {
  margin: 0;
  font-weight: lighter;
}
.weatherDegree {
  font-weight: bold !important;
  color:  rgb(255, 220, 138) !important;
}
.weekDay {
	display: flex;
	align-items: center;
	justify-content: center;
  background-color: rgb(255, 220, 138);
color: rgb(0, 0, 0);
min-width: 90px;
max-width: 83px;
}



@media (max-width: 768px) {
  .todayData {
    display: grid !important;
    grid-template-columns: 1fr 1fr;
}

.todayData>div:nth-child(2n+1) {
    border-left: unset !important;
}
.WeekForecast {
    display: block !important;
}

.weekDay {
    min-width: unset !important;
    max-width: unset !important;
    text-align: center;
    padding: 5px 0 !important;
    border-top-right-radius: 10px;
}

.weekHours > div p {
    margin: 0 !important;
}


.weekHours > div {
    padding: 10px !important;
}

.weekHours {
    justify-content: flex-start !important;
}
.TodayForecast{
  flex-wrap: wrap;
  padding-bottom: 0 !important;
}
.TodayForecast>div{
  margin-bottom: 15px;
}
.banner{
  background-size: cover;
}
}

`
export {Wrapper};