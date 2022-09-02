import styled from 'styled-components';
import city from '../../image/city.png'
import neon from '../../image/neonCut1.png'
import {pxToView} from '../../Utils/pxToView/pxToView'

const height = window.innerHeight

export const LogoImg = styled.img`
border-radius: 50%;

`

export const Logo = styled.div`
display:flex;
position:absolute;
width:115px;
height:115px;
margin-right:90%;
/* margin-left:0vw; */
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
background: black;
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
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 29px;
   :hover{
    font-size: 2.1rem;
   }
   `

export const Ulist = styled.ul`

display:flex;
justify-content: center;
align-items: center;
width: 100vw ;
height:120px;
flex-wrap: wrap;
font-size: clamp(1rem, 1.5vw, 2rem); 
background: linear-gradient(90deg, #000000 0%, #213D4B 100%);
box-shadow: 0px 73px 29px rgba(0, 203, 231, 0.02), 0px 41px 25px rgba(0, 203, 231, 0.06), 0px 18px 18px rgba(0, 203, 231, 0.1), 0px 5px 10px rgba(0, 203, 231, 0.12), 0px 0px 0px rgba(0, 203, 231, 0.12);
font-weight: 400;
text-decoration: none;
font-family: rubik, sans-serif;
color:whitesmoke;
    `

export const ImgFlagB = styled.img`
margin-left: 20%;
margin-right: 1%;
:hover{
  cursor: pointer;
}
    `
    export const ImgFlagA = styled.img`
margin-right: 5%;
:hover{
  cursor: pointer;
}

    `

    export const ContatoButton = styled.button`
background: #1B323E;
border: 2px solid #00099D;
box-shadow: 13px 12px 5px rgba(0, 203, 231, 0.02), 9px 8px 5px rgba(0, 203, 231, 0.15), 5px 4px 4px rgba(0, 203, 231, 0.5), 2px 2px 3px rgba(0, 203, 231, 0.85), 1px 0px 2px rgba(0, 203, 231, 0.98), 0px 0px 0px #00CBE7;
border-radius: 10px;
width: 230px;
height: 56px;
font-size: 24px;
cursor: pointer;
color:whitesmoke;
/* margin-left: 20%; */
margin-right: 10%;
:hover{
    font-size: 1.7rem;
   }
    `
