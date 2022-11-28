import React from "react";
import { FOOTERS } from "constants/staticData";
import tw from "assets/images/tw.svg";
import dis from "assets/images/dis.svg";
import git from "assets/images/git.svg";
import { StyleContainer, StyleForm, StyleBtn, StyleLink } from "./style";

const Footer = () => {
  return (
    <StyleContainer>
      {FOOTERS.map((footer, index) => (
        <ul key={index}>
          <li
            style={{
              color: "rgba(178, 204, 204, 1)",
              fontWeight: "700",
              fontSize: "18px",
            }}
          >
            {footer.title}
          </li>
          {footer.childrend.map((child, i) => (
            <li
              style={{
                fontSize: "18px",
              }}
              key={child + i}
            >
              <StyleLink href="/">{child}</StyleLink>
            </li>
          ))}
        </ul>
      ))}
      <div>
        <p
          style={{
            color: "rgba(178, 204, 204, 1)",
            fontWeight: "700",
            fontSize: "18px",
          }}
        >
          NewsLetter
        </p>
        <p>
          The latest news, articles, and resources, sent to your inbox monthly.
        </p>
        <StyleForm>
          <input placeholder="Email" />
          <StyleBtn>Subcribe</StyleBtn>
        </StyleForm>
        <div>
          <a href="/">
            <img src={tw} alt="" />
          </a>
          <a href="/">
            <img src={dis} alt="" />
          </a>
          <a href="/">
            <img src={git} alt="" />
          </a>
        </div>
      </div>
    </StyleContainer>
  );
};

export default Footer;
