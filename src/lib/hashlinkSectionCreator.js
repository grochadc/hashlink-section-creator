import React, { useEffect } from "react";
import PropTypes from "prop-types";

const HashLinkCreator = props => {
  const links = props.children.length
    ? props.children.filter(el => el.type === "section").map(el => el.props.id)
    : props.children.type === "section"
      ? props.children.props.id
      : undefined;
  useEffect(() => props.setSectionLinks(links), []);
  return <div>{props.children}</div>;
};

HashLinkCreator.propTypes = {
  setSectionLinks: PropTypes.func.isRequired
};

export default HashLinkCreator;
