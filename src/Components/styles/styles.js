import styled from 'styled-components';
import city from '../../image/city.png'
import neon from '../../image/neonCut1.png'
import { pxToView} from '../../Utils/pxToView/pxToView'

const height = window.innerHeight



export const TexTech =styled.img`
z-index: 0;
display: flex;
position: absolute;
width: clamp(10vw,100% ,20vw) ;
left: 0%;
`

export const TextMain =styled.h1`
display: flex;
position:absolute;
color: whitesmoke;
padding: 1%;
font-size: 64px; 
font-weight: 700;
z-index: 0;
bottom: 15%;
right: 5%;
background: linear-gradient(194deg, rgba(40,37,37,0.6209271034497894) 99%, rgba(46,43,43,0.486095642775632) 100%);
border: 2px;
-webkit-border-tradius: 50px;
-webkit-border-radius: 50px;
-moz-border-radius-topleft: 50px;
-moz-border-radius-bottomleft: 50px;
border-radius: 50px;
border-radius: 50px;
width: clamp(10vw, 100%, 60vw);

`

export const LogoImg = styled.img`
border-radius: 50%;

`

export const Logo = styled.div`
display:flex;
position:fixed;

width:80px;
height:80px;
margin-right:90%;
margin-left:0vw;
`

export const HeaderSection = styled.div`
width:${pxToView(window.innerWidth)};
position: fixed;
display:flex;
justify-content: flex-end;
align-items: center;
z-index:9999;
  `
export const SecSection = styled.div`  
width:${pxToView(window.innerWidth)};
height: ${height}px;
background-image: url("${neon}"); 
background-repeat: no-repeat; 
background-size: cover;
background-position:center;

display:flex;
align-items: center;
justify-content:center;
z-index:7000
`
export const InfoSection = styled.div`
width:${pxToView(window.innerWidth)};
height: ${height}px;
background-color: whitesmoke;
background-repeat: no-repeat; 
background-size: cover;

background: rgb(40,37,37);
background: linear-gradient(194deg, rgba(40,37,37,0.6209271034497894) 99%, rgba(46,43,43,0.486095642775632) 100%);

display:flex;
align-items: center;
justify-content:center;

`

export const ContactSection = styled.div`
width:${pxToView(window.innerWidth)};
height: ${height}px;
background-image: url("${city}"); 
background-size: auto;
background-repeat: no-repeat; 
background-size: cover;
background-position:center;

display:flex;
align-items: center;
justify-content:center;
`

export const ProjectSection = styled.div`
width:${pxToView(window.innerWidth)};
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
width:${pxToView(window.innerWidth)};
height: ${height}px;
text-align: center;
  
  `
export const Li = styled.li`
   display: inline;
   padding: 23px 15px;
   cursor: pointer;
   color: black;
   font-size: 2rem;
   :hover{
    font-size: 2.1rem;
   }
   `

export const Ulist = styled.ul`

display:flex;
justify-content: center;
align-items: center;
width: 100vw ;
flex-wrap: wrap;

font-size: clamp(1rem, 1.5vw, 2rem); 
background: rgb(255,255,255);
background: linear-gradient(90deg, rgba(255,255,255,0.692612079011292) 0%, rgba(255,255,255,0.29485297536983546) 48%, rgba(255,255,255,0.692612079011292) 100%);
font-weight: 400;
text-decoration: none;
font-family: rubik, sans-serif;
color:whitesmoke;
:hover{
  background: whitesmoke;
}
    `