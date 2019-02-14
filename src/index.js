import React, { useState } from "react";
import { render } from "react-dom";
import { HashLinkCreator } from "./lib";

const sectionStyles = { height: "90vh", textAlign: "center" };
const secondarySectionStyles = {
  backgroundColor: "palevioletred",
  color: "white",
  ...sectionStyles
};

const navStyles = { position: "fixed", top: 0 };

const navItemStyles = { marginRight: "10px" };

const App = () => {
  //Setup a state to manage hashlink ids
  //links come as an array of strings with the id
  const [links, setSectionLinks] = useState([]);
  return (
    //setSectionLinks prop should be a function to receive the links
    <HashLinkCreator setSectionLinks={setSectionLinks}>
      <nav style={navStyles}>
        {/*you can use the links wherever you like*/}
        {links
          ? links.map(id => (
              <a href={`#${id}`} key={id} style={navItemStyles}>
                {id}
              </a>
            ))
          : null}
      </nav>
      <section id="hell" style={sectionStyles}>
        <h1>Hell</h1>
      </section>
      <div />
      <section id="raiser" style={secondarySectionStyles}>
        <h1>
          <em>Raiser</em>
        </h1>
      </section>
      <div />
      <section id="ishere" style={sectionStyles}>
        <h1>is here</h1>
      </section>
    </HashLinkCreator>
  );
};

render(<App />, document.getElementById("root"));
