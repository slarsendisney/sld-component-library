import React from "react";
import { storiesOf } from "@storybook/react";
import "../styles/global.scss";
import GetThis from "../lib/GetThis";
import Footer from "../lib/Footer";
import Hero from "../lib/Hero";
import Logo from "../images/watermelon.png";
import Header from "../lib/Header";

const places = [
  {
    label: "gatsby",
    url: "https://www.gatsbyjs.org/"
  },
  {
    label: "express",
    url: "https://expressjs.com/"
  },
  {
    label: "redux",
    url: "https://redux.js.org/"
  },
  {
    label: "socket.io",
    url: "https://socket.io/"
  }
];

storiesOf("Components", module)
  .add("Header", () => <Header logo={Logo} />)
  .add("Hero", () => (
    <div className="is-pink-bg">
      <Hero places={places} title="BoilerPlate" />
    </div>
  ))
  .add("Get this boilerplate", () => <GetThis />)
  .add("Footer", () => <Footer />);
