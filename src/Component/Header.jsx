const Header = () => {
  return (
    <div className="header">
      <img
        src="/src/assets/img/logo.png"
        alt="Nexter Logo"
        className="header__logo"
      />
      <h3 className="heading-3">Your own home</h3>
      <h1 className="heading-1">The ultimate personal freedom</h1>
      <button className="btn header__btn"> View our properties</button>
      <div className="header__seenon-text">As seen on</div>
      <div className="header__seenon-logos">
        <img src="/src/assets/img/logo-bbc.png" alt="Seenon logo1" />

        <img src="/src/assets/img/logo-forbes.png" alt="Seenon logo 2" />
        <img src="/src/assets/img/logo-techcrunch.png" alt="Seenon logo 3" />
        <img src="/src/assets/img/logo-bi.png" alt="Seenon logo 4" />
      </div>
    </div>
  );
};

export default Header;
