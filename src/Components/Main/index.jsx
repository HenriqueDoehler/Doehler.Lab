import React, { useRef, useState } from "react";
import {
  HeaderSection,
  SecSection,
  InfoSection,
  ContactSection,
  App,
  Ulist,
  Li,
  Logo,
  LogoImg,
  ProjectSection,
  ButtonMenuMobile,
  UlistMobile,
  LiM,
} from "../styles/styles";
import ThreeD from "../3D";
import ScrollToTop from "../TopButton";
import ModalUfo from "../ModalUfo/index";
import LogoDoehler from "../../image/logos/logo.svg";
import menuSan from "../../image/icons/menuSan.png";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../languageSwitch/index";
import "./styles.css";
import RainModal from "../modalRain/index";
import AppD from "../deck/index.js";

function Main() {
  const [active, setActive] = useState(false);
  const [activeToggle, setActiveToggle] = useState(false);
  const home = useRef(null);
  const info = useRef(null);
  const contact = useRef(null);
  const projects = useRef(null);
  const { t } = useTranslation();

  function toggleMenu() {
    !activeToggle ? setActiveToggle(true) : setActiveToggle(false);
  }

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <App>
      <ScrollToTop />

      <HeaderSection>
        <Logo>
          <LogoImg src={LogoDoehler} alt="Loading..." />
        </Logo>

        <ButtonMenuMobile onClick={toggleMenu}>
          <img className="img-transparent" src={menuSan} alt="" />
        </ButtonMenuMobile>
        {activeToggle && (
          <UlistMobile>
            <LiM
              onClick={() => {
                setActiveToggle(false);
                scrollToSection(home);
              }}
            >
              Home
            </LiM>
            <LiM
              onClick={() => {
                setActiveToggle(false);
                scrollToSection(info);
              }}
            >
              {t("sobreMin")}
            </LiM>
            <LiM
              onClick={() => {
                setActiveToggle(false);
                scrollToSection(contact);
              }}
            >
              Skills
            </LiM>
            <LiM
              onClick={() => {
                setActiveToggle(false);
                scrollToSection(projects);
              }}
            >
              {t("projetos")}
            </LiM>
            <LanguageSwitcher />
          </UlistMobile>
        )}

        <Ulist>
          <Li onClick={() => scrollToSection(home)}>Home</Li>
          <Li onClick={() => scrollToSection(info)}>{t("sobreMin")}</Li>
          <Li onClick={() => scrollToSection(contact)}>Skills</Li>
          <Li onClick={() => scrollToSection(projects)}>{t("projetos")}</Li>
          <LanguageSwitcher />
        </Ulist>

        <button className="button-82-pushable">
          <span className="button-82-shadow"></span>
          <span className="button-82-edge"></span>
          <span className="button-82-front text">{t("btnContato")}</span>
        </button>
      </HeaderSection>
      <SecSection ref={home}>
        <ThreeD active={active} setActive={setActive} />
        {active && <ModalUfo active={active} setActive={setActive} />}
        <RainModal />
      </SecSection>
      <InfoSection ref={info}></InfoSection>
      <ContactSection ref={contact}>
        <div className="container-main-deck">
          <AppD />
          <div className="container-main-deck2">
            <p className="text-box2">hello mad world</p>
          </div>
        </div>
      </ContactSection>
      <ProjectSection ref={projects}></ProjectSection>
    </App>
  );
}

export default Main;
