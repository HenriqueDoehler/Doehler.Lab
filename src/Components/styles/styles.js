import styled from 'styled-components';
import city from '../../image/city.png'
import neon from '../../image/neonCut1.png'
import galaxy from '../../image/galaxy.png'
import {pxToView} from '../../Utils/pxToView/pxToView'

const height = window.innerHeight

export const LogoImg = styled.img`
border-radius: 50%;

`

export const Logo = styled.div`
display:flex;
/* position:absolute; */
/* width:115px;
height:115px;
margin-right:90%; */

`

export const HeaderSection = styled.nav`
width:${pxToView(window.innerWidth)};
height:100px;
position: fixed;
display:flex;
justify-content: space-between;
align-items: center;
background: rgb(0,0,0);
background: linear-gradient(90deg, rgba(0,0,0,1) 15%, rgba(37,59,58,0.7906512946975666) 48%, rgba(2,149,140,0.37888658881521353) 100%);
z-index:9999;
@media screen and (max-width: 600px) {
  height: 60px;
  
}
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
@media screen and (max-width: 500px) {
  background-image: url("${galaxy}"); 
  
}
`
export const InfoSection = styled.div`
width:${pxToView(window.innerWidth)};
height: 2200px;
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
background: white;
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
    color: #00CBE7;
   }
   `

export const Ulist = styled.ul`

display:flex;
justify-content: center;
align-items: center;
width: 100vw ;
flex-wrap: wrap;
font-size: clamp(1rem, 1vw, 2rem); 
font-weight: 400;
text-decoration: none;
font-family: rubik, sans-serif;
color:whitesmoke;
@media screen and (max-width: 600px){ 
  display:none;

}
    `
    
export const ButtonMenuMobile = styled.button`
display:none;
@media screen and (max-width: 600px){ 
  display:flex;
  background: transparent;
  border:none;
  margin-right: 10px;

}

`
export const  UlistMobile = styled.ul`
background: rgb(40,37,37);
background: linear-gradient(194deg, rgba(40,37,37,0.6209271034497894) 99%, rgba(46,43,43,0.486095642775632) 100%);
display:flex;
align-items:center;
justify-content:flex-start;
position:absolute;
flex-direction:column;
width:100vw;
height:calc(100vh - 60px);
top:60px;
border:none;

`
export const  LiM = styled.li`
font-size: clamp(1rem, 1vw, 2rem); 
font-weight: 400;
text-decoration: none;
font-family: rubik, sans-serif;
color:whitesmoke;
list-style: none;
padding: 30px;
top:0;
width:100vw;
border-bottom: 1px  solid rgba(0,0,0,0.3);
`
