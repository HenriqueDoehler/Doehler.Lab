
import React,{ useRef, useState } from 'react';
import { HeaderSection, SecSection, InfoSection, ContactSection, App, Ulist, Li, Logo, LogoImg  } from '../styles/styles'
import ThreeD from '../3D';
import ScrollToTop from '../TopButton';
import ModalUfo from '../ModalUfo/index'
import LogoDoehler from '../../image/logos/DoehlerLab.gif'

function Main(){
  const [active, setActive] = useState(false)
const home =    useRef(null)
const info  =   useRef(null)
const contact = useRef(null)

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
            <Li onClick={() => scrollToSection(home)}>HOME</Li>
            <Li onClick={() => scrollToSection(info)}>INFO</Li>
            <Li onClick={() => scrollToSection(contact)}>CONTATO</Li>
            <Li>BLOG</Li>
          </Ulist>
        </HeaderSection>
        <SecSection ref={home}>
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
        
        </InfoSection>
        <ContactSection ref={contact}>
           
        </ContactSection>
        
       </App>
    )

}

export default Main