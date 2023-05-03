import React from "react";

const Link = ({ className, href, children }) => {
  const onLinkClick = (e) => {
    e.preventDefault();
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  return (
    <a onClick={onLinkClick} href={href} className={className}>
      {children}
    </a>
  );
};

export default Link;
