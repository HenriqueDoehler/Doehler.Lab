import styled from 'styled-components';
import city from '../../image/city.png'
import neon from '../../image/neonCut1.png'

const height = window.innerHeight



export const Logo = styled.div`
margin-right:35vw;
margin-left:35vw;
`

export const HeaderSection = styled.div`
width: 100vw;
position: fixed;
display:flex;
align-items: center;
justify-content: flex-end;
/* margin-left: 75vw; */
z-index:9999;
  `
export const SecSection = styled.div`  
width:100vw;
height: ${height}px;
background-image: url("${neon}"); 
background-repeat: no-repeat; 
background-size: cover;
background-position:center;

display:flex;
align-items: center;
justify-content:center;

`
export const InfoSection = styled.div`
width:100vw;
height: ${height}px;
background-color: whitesmoke;
background-repeat: no-repeat; 
background-size: cover;
background-position:center;

display:flex;
align-items: center;
justify-content:center;

`

export const ContactSection = styled.div`
width:100vw;
height: ${height}px;
background-image: url("${city}"); 
background-repeat: no-repeat; 
background-size: cover;
background-position:center;

display:flex;
align-items: center;
justify-content:center;
`
export const App = styled.div`
  text-align: center;
  
  `
export const Li = styled.li`
   display: inline;
   padding: 5px 100px;
   cursor: pointer; `

export const Ulist = styled.ul`
gap: 1%;
display:flex;
align-items: center;
/* position:absolute; */

font-size: 15px;
background: rgb(63,242,251);
background: -moz-radial-gradient(circle, rgba(63,242,251,0.1692415730337079) 54%, rgba(19,63,80,0.8237359550561798) 85%, rgba(14,41,59,0.8433988764044944) 96%);
background: -webkit-radial-gradient(circle, rgba(63,242,251,0.1692415730337079) 54%, rgba(19,63,80,0.8237359550561798) 85%, rgba(14,41,59,0.8433988764044944) 96%);
background: radial-gradient(circle, rgba(63,242,251,0.1692415730337079) 54%, rgba(19,63,80,0.8237359550561798) 85%, rgba(14,41,59,0.8433988764044944) 96%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3ff2fb",endColorstr="#0e293b",GradientType=1);
border: 2px;
-webkit-border-top-left-radius: 50px;
-webkit-border-bottom-left-radius: 50px;
-moz-border-radius-topleft: 50px;
-moz-border-radius-bottomleft: 50px;
border-top-left-radius: 50px;
border-bottom-left-radius: 50px;
font-weight: 700;
text-decoration: none;
font-family: rubik, sans-serif;
color:whitesmoke;
    `