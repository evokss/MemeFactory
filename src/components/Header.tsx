import React from "react";

export default function Header(): React.ReactElement {
  return (
    <header className="header">
      <img src="./troll-face.png" className="header--image" alt="Troll Face" />
      <h2 className="header--title">Meme Factory</h2>
      <h4 className="header--project">Eva's Projects</h4>
    </header>
  );
}
