import styled from "styled-components";
import { devices } from "assets/style/responsive";
const StyleHeaderContainer = styled.header`
  backdrop-filter: blur(12px);
  background-color: rgba(0, 30, 38, 0.7);
  position: sticky;
  top: 0;
  z-index: 13;
`;
const StyleNav = styled.div`
  display: flex;
  align-items: center;
  height: 72px;
  max-width: 1280px;
  padding: 0px 24px;
  margin: auto;
  color: #fff;
  justify-content: space-between;
  @media ${devices.ipad} {
    padding: 0px 12px;
    padding-left: 22px;
  }
  @media ${devices.iphone} {
    height: 56px;
    padding: 0px 12px;
    padding-left: 22px;
  }

  img.icon {
    height: 1rem;
  }
  img.translate {
    width: 1.5rem;
    :hover {
      filter: invert(1);
    }
  }
  img.search {
    width: 20px;
    height: 20px;
    margin: 0 6px;
    :hover {
      cursor: pointer;
    }
  }
`;
const StyleImage = styled.img`
  padding-top: 2px;
  height: 2.25rem;
  @media ${devices.ipad} {
    height: 2.1rem;
  }
`;
const StyleMenu = styled.img`
  display: none;
  @media ${devices.desktop} {
    display: block;
  }
`;
const StyleHeaderLogo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const StyleNavWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  a {
    color: rgba(255, 255, 255, 1);
    padding: 0.5rem 0.25rem 0.5rem 0.25rem;
    font-weight: 700;
    text-decoration: none;
  }
`;

const StyleNavItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

const StyleNavItemText = styled.span`
  display: flex;
  white-space: nowrap;
  color: rgba(255, 255, 255, 1);
  padding: 0.5rem 0.25rem 0.5rem 0.25rem;
  font-weight: 500;
`;

const StyleFeatures = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyleTranslate = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
const StyleSearch = styled.button`
  display: flex;
  align-items: center;
  padding: 0 8px;
  background-color: transparent;
  border-radius: 0.125rem;
  height: 3rem;
  margin: auto;
  width: 3rem;
  border: none;
`;

export {
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
};
