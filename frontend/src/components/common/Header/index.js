import { useEffect, useState } from "react";
import {
  StyleHeaderContainer,
  StyleHeaderLogo,
  StyleNavWrapper,
  StyleNavItem,
  StyleNavItemText,
  StyleFeatures,
  StyleTranslate,
  StyleSearch,
  StyleNav,
  StyleMenu,
  StyleImage,
} from "./styles";
import Logo from "assets/images/Logo.svg";
import Icon from "assets/images/DownArrow.svg";
import Translate from "assets/images/Translate.svg";
import Search from "assets/images/Search.svg";
import Menu from "assets/images/menu.svg";
const Header = () => {
  function getWindowSize() {
    const { innerWidth } = window;
    return { innerWidth };
  }
  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <StyleHeaderContainer>
      <StyleNav>
        {windowSize.innerWidth < 1024 ? (
          <>
            <StyleMenu width={24} height={24} src={Menu} alt="" />
            <StyleHeaderLogo>
              <a href="/">
                <StyleImage alt="Logo" src={Logo} />
              </a>
            </StyleHeaderLogo>{" "}
            <StyleFeatures>
              <StyleSearch>
                <img alt="icon" className="search" src={Search} />
              </StyleSearch>
            </StyleFeatures>
          </>
        ) : (
          <>
            <StyleHeaderLogo>
              <a href="/">
                <StyleImage alt="Logo" src={Logo} />
              </a>
            </StyleHeaderLogo>
            <StyleNavWrapper>
              <StyleNavItem>
                <StyleNavItemText>Discover</StyleNavItemText>
                <img alt="icon" className="icon" src={Icon} />
              </StyleNavItem>
              <StyleNavItem>
                <StyleNavItemText>Learn</StyleNavItemText>
                <img alt="icon" className="icon" src={Icon} />
              </StyleNavItem>
              <StyleNavItem>
                <StyleNavItemText>Explore</StyleNavItemText>
                <img alt="icon" className="icon" src={Icon} />
              </StyleNavItem>
              <StyleNavItem>
                <StyleNavItemText>Community</StyleNavItemText>
                <img alt="icon" className="icon" src={Icon} />
              </StyleNavItem>
              <a href="/">Partners</a>
            </StyleNavWrapper>
            <StyleFeatures>
              <StyleTranslate>
                <img alt="icon" className="translate" src={Translate} />
                <img alt="icon" className="icon" src={Icon} />
              </StyleTranslate>
              <StyleSearch>
                <img alt="icon" className="search" src={Search} />
              </StyleSearch>
            </StyleFeatures>
          </>
        )}
      </StyleNav>
    </StyleHeaderContainer>
  );
};

export default Header;
