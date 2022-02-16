// eslint-disable-next-line no-unused-vars
import React from 'react';

export default function UXPinWrapper({ children }) {
  if (!document.getElementById("mui-merge-icons")) {
    let icons = document.createElement("link");
    icons.setAttribute(
      "href",
      "https://fonts.googleapis.com/icon?family=Material+Icons"
    );
    icons.setAttribute("rel", "stylesheet");
    icons.setAttribute("id", "mui-merge-icons");
    document.head.appendChild(icons);
  }

  return children;
}
