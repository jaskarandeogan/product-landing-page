import logo from "./../assets/svg/sneakers.svg";
import cart from "./../assets/icons/Shape.svg";
import profile from "./../assets/profile.JPG";

const Header = () => {
  const nav = [
    {
      id: 1,
      name: "Collections",
      link: "#",
    },
    {
      id: 2,
      name: "Men",
      link: "#",
    },
    {
      id: 3,
      name: "Women",
      link: "#",
    },
    {
      id: 4,
      name: "Kids",
      link: "#",
    },
    {
      id: 5,
      name: "Contact",
      link: "#",
    },
  ];

  return (
    <header className="Header  max-w-6xl mx-auto flex justify-between m-4 items-center border-b-[1px] pb-2">
      <div className="log-nav flex gap-6 items-center">
        <div className="logo ">
          <img src={logo} alt="logo" />
        </div>
        <nav className="nav">
          <ul className="nav__list flex text-[gray] ">
            {nav.map((item) => {
              return (
                <li className="nav__item m-4 hover:text-[orange]" key={item.id}>
                  <a href={item.link} className="nav__link">
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="cart-section flex items-center gap-5 border-radius-">
        <div className="cart">
          <img src={cart} alt="cart" />
        </div>
        <div className="profile w-10 h-auto rounded-full">
          <img src={profile} alt="profile" className="rounded-full" />
        </div>
      </div>
    </header>
  );
};

export default Header;
