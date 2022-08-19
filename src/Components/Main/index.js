import React,{ useRef, useState } from 'react';
import { HeaderSection, SecSection, InfoSection, ContactSection, App, Ulist, Li, Logo, LogoImg, TextMain, TexTech, ProjectSection  } from '../styles/styles'
import ThreeD from '../3D';
import  Note3D  from '../3D/3D-Obj/noteIndex';
import ScrollToTop from '../TopButton';
import ModalUfo from '../ModalUfo/index'
import LogoDoehler from '../../image/logos/BlueFireLogo.gif'
import TextTech from '../../image/textTech.png'

function Main(){
const [active, setActive] = useState(false)
const home =    useRef(null)
const info  =   useRef(null)
const contact = useRef(null)
const projects = useRef(null)

const scrollToSection = (elementRef) => {
  window.scrollTo({
    top: elementRef.current.offsetTop,
    behavior: 'smooth',
  })
}
    return(
       <App >
        <ScrollToTop />
        <HeaderSection >
          <Logo>
             <LogoImg src={LogoDoehler} alt='Loading...'/>
          </Logo>

          <Ulist>
            <Li onClick={() => scrollToSection(home)}>Home</Li>
            <Li onClick={() => scrollToSection(info)}>Skills</Li>
            <Li onClick={() => scrollToSection(contact)}>Contatos</Li>
            <Li onClick={() => scrollToSection(projects)}>Projetos</Li>
          </Ulist>
        </HeaderSection>
        <SecSection ref={home}>
          {/* <TextMain >
 <nobr>Bem vindo, me chamo Henrique,<br />Desenvolvedor Front End...  </nobr>
          </TextMain> */}
          <TexTech src={TextTech} alt='TechLab...' />

          
           <ThreeD 
           active={active}
           setActive={setActive}
           />
           {
          active && 
          <ModalUfo 
            active={active}
            setActive={setActive}
           />
        }
        </SecSection>
        <InfoSection ref={info}> 
        <Note3D />
        </InfoSection>
        <ContactSection ref={contact}>
        </ContactSection>
        <ProjectSection ref={projects}>
        </ProjectSection>
        
       </App>
    )

}

export default Main