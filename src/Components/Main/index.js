import React,{ useRef, useState } from 'react';
import { HeaderSection, SecSection, InfoSection, ContactSection, App, Ulist, Li, Logo, LogoImg, ProjectSection, ContatoButton } from '../styles/styles'
import ThreeD from '../3D';
import ScrollToTop from '../TopButton';
import ModalUfo from '../ModalUfo/index'
import LogoDoehler from '../../image/logos/logo-oculos.gif'
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../languageSwitch/index'
import './styles.css'

function Main(){
const [active, setActive] = useState(false)
const home =    useRef(null)
const info  =   useRef(null)
const contact = useRef(null)
const projects = useRef(null)
const { t } = useTranslation()

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
            <Li onClick={() => scrollToSection(info)}>{t("sobreMin")}</Li>
            <Li onClick={() => scrollToSection(contact)}>Skills</Li>
            <Li onClick={() => scrollToSection(projects)}>{t("projetos")}</Li>
            <div className='container-btn-home'>
              <LanguageSwitcher />
              <ContatoButton>{t("btnContato")}</ContatoButton>
            </div>
            
             
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
        <ProjectSection ref={projects}>
        </ProjectSection>
        
       </App>
    )

}

export default Main