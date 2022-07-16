import logo from "../../assets/img/logo.svg";

import './styles.css';

function Header() {
  return (
    <div className="dsmeta-logo-container">
      <img src={logo} alt="DSMeta" />
      <h1>DSMeta</h1>
      <p>
        Desenvolvido por 
        <a href="https://www.linkedin/in/felpschneider">Felipe Schneider</a>
      </p>
    </div>
  );
}

export default Header;
