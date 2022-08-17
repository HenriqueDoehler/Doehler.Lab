import styled from 'styled-components';
import city from '../../image/city.png'
import neon from '../../image/neonCut1.png'
// import Down from '../../image/downNeon1.png'

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
z-index:-1000

`
export const InfoSection = styled.div`
width:100vw;
height: ${height}px;
background-color: whitesmoke;
background-repeat: no-repeat; 
background-size: cover;
background: rgb(2,2,2);
background: linear-gradient(90deg, rgba(2,2,2,0.8130602582830007) 0%, rgba(0,0,0,0.7122199221485469) 35%, rgba(176,170,170,0.05675773727459732) 100%);

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
   padding: 20px 40px;
   cursor: pointer; `

export const Ulist = styled.ul`

display:flex;
align-items: center;


font-size: 15px;
background: rgb(2,2,2);
background: linear-gradient(90deg, rgba(2,2,2,0.8130602582830007) 0%, rgba(0,0,0,0.7122199221485469) 35%, rgba(176,170,170,0.05675773727459732) 100%);
border: 2px;
-webkit-border-top-left-radius: 50px;
-webkit-border-bottom-left-radius: 50px;
-moz-border-radius-topleft: 50px;
-moz-border-radius-bottomleft: 50px;
border-top-left-radius: 50px;
border-bottom-left-radius: 50px;
font-weight: 400;
text-decoration: none;
font-family: rubik, sans-serif;
color:whitesmoke;
    `