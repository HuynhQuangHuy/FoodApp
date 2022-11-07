import React from "react";
import {
  StyleContainer,
  StyleWrapper,
  StyleRow,
  StyleColumn,
  StyleLink,
  StyleTitle,
} from "./styles/footer";

export default function Footer({ children, ...restProps }) {
  return <StyleContainer {...restProps}>{children}</StyleContainer>;
}

Footer.Wrapper = function FooterWrapper({ children, ...restProps }) {
  return <StyleWrapper {...restProps}>{children}</StyleWrapper>;
};

Footer.Row = function FooterRow({ children, ...restProps }) {
  return <StyleRow {...restProps}>{children}</StyleRow>;
};

Footer.Column = function FooterColumn({ children, ...restProps }) {
  return <StyleColumn {...restProps}>{children}</StyleColumn>;
};

Footer.Link = function FooterLink({ children, ...restProps }) {
  return <StyleLink {...restProps}>{children}</StyleLink>;
};

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <StyleTitle {...restProps}>{children}</StyleTitle>;
};
