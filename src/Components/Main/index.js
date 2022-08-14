
import React,{ useRef } from 'react';
import { HeaderSection, SecSection, InfoSection, ContactSection, App, Ulist, Li, Logo  } from '../styles/styles'
import ThreeD from '../3D';
import ScrollToTop from '../TopButton';

function Main(){

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
             <ThreeD />
          </Logo>

          <Ulist>
            <Li onClick={() => scrollToSection(home)}>HOME</Li>
            <Li onClick={() => scrollToSection(info)}>INFO</Li>
            <Li onClick={() => scrollToSection(contact)}>CONTATO</Li>
          </Ulist>
        </HeaderSection>
        <SecSection ref={home}>
           <ThreeD />
        </SecSection>
        <InfoSection ref={info}> 
        <ThreeD />
        </InfoSection>
        <ContactSection ref={contact}>
           <ThreeD />
        </ContactSection>

       </App>
    )

}

export default Main