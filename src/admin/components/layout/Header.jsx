import { useState, useEffect } from "react";
import { initDropdownsDashboard } from "../../scripts/dropdown";
import { useNavigate } from "react-router-dom"; // if using React Router

export default function Header() {
  // State for dropdowns
  const [notifOpen, setNotifOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const navigate = useNavigate(); // react-router navigation

  const toggleNotif = () => setNotifOpen(!notifOpen);
  const toggleUser = () => setUserOpen(!userOpen);
  const handleLogout = () => {
    localStorage.removeItem("token"); 
    navigate("/");
  };
  useEffect(() => {
    initDropdownsDashboard();
    return () => {
      document
        .querySelectorAll('[data-toggle="dropdown1"]')
        .forEach((button) => {
          button.replaceWith(button.cloneNode(true));
        });
    };
  }, []);

  return (
    <div className="theme-header">
      <div className="is-flex is-gap-2 is-align-items-center is-justify-content-end">
        {/* Menu toggle */}
        <a
          id="theme-menu-toggle-res"
          className="theme-menu-toggle-res"
          href="#"
          onClick={(e) => e.preventDefault()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </a>

        {/* Marquee */}
        <marquee
          className="marquee-text"
          direction="left"
          behavior="scroll"
          scrollAmount="8"
        >
          <span>
            Lorem ipsum dolor sit amet, <b>consectetur adipiscing</b> elit.
            Fusce nec tristique diam. Sed laoreet metus in efficitur feugiat.{" "}
            <b>Mauris in turpis</b> et nisi tempus ultrices. Morbi lobortis, ex
            sed tincidunt suscipit, dolor urna sollicitudin nulla,{" "}
            <b>consectetur venenatis</b> quam leo quis orci.
          </span>
        </marquee>

        {/* Right side dropdowns */}
        <div className="is-flex is-align-items-center is-gap-2">
          {/* User dropdown */}
          <div className="dropdown is-flex-shrink-0">
            <button
              className="bg-transparent border-0"
              type="button"
              data-toggle="dropdown1"
            >
              <img
                className="avatar avatar-sm"
                src="media/images/avatars/1.png"
                alt="Avatars"
              />
            </button>
            <div className="dropdown-menu pt-1 pb-1">
              <a className="dropdown-item" href="userprofile">
                Profile
              </a>
              <a className="dropdown-item" href="javascript:void(0);" onClick={(e) => {
                  e.preventDefault();
                  handleLogout();
                }}>
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
