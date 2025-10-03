import React, { useState } from "react";

export default function Header() {
  // State for dropdowns
  const [notifOpen, setNotifOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);

  const toggleNotif = () => setNotifOpen(!notifOpen);
  const toggleUser = () => setUserOpen(!userOpen);

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
        <marquee className="marquee-text" direction="left" behavior="scroll" scrollAmount="8">
          <span>
            Lorem ipsum dolor sit amet, <b>consectetur adipiscing</b> elit. Fusce nec tristique
            diam. Sed laoreet metus in efficitur feugiat. <b>Mauris in turpis</b> et nisi tempus
            ultrices. Morbi lobortis, ex sed tincidunt suscipit, dolor urna sollicitudin nulla,{" "}
            <b>consectetur venenatis</b> quam leo quis orci.
          </span>
        </marquee>

        {/* Right side dropdowns */}
        <div className="is-flex is-align-items-center is-gap-2">
          {/* Notifications */}
          <div className="dropdown dropdown-notifications is-flex-shrink-0">
            <button
              className="bg-transparent border-0"
              type="button"
              onClick={toggleNotif}
            >
              <span className="rounded-pill tag tag-notifications tag-xs bg-success white-text">
                5
              </span>
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-bell"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
              </svg>
            </button>

            {notifOpen && (
              <div className="dropdown-menu dropdown-notifications-menu">
                <div className="dropdown-notifications-header border-bottom">
                  <h5>Notification</h5>
                </div>
                <ul className="dropdown-notifications-item-wrapper theme-scrollbar">
                  <li className="dropdown-notifications-item">
                    <img className="avatar avatar-md" src="media/images/avatars/4.png" alt="Avatars" />
                    <div className="is-block">
                      <h6>Congratulation John Doe 🎉</h6>
                      <p>Aenean sollicitudin, arcu quis bibendum.</p>
                      <small className="text-muted">1h ago</small>
                    </div>
                  </li>
                  <li className="dropdown-notifications-item">
                    <img className="avatar avatar-md" src="media/images/avatars/2.png" alt="Avatars" />
                    <div className="is-block">
                      <h6>Praesent rhoncus finibus dapibus</h6>
                      <p>Nulla est odio, pharetra sed faucibus eu, lacinia a nisi.</p>
                      <small className="text-muted">1 Day ago</small>
                    </div>
                  </li>
                  <li className="dropdown-notifications-item">
                    <img className="avatar avatar-md" src="media/images/avatars/3.png" alt="Avatars" />
                    <div className="is-block">
                      <h6>Aliquam nec nisi ac ipsum pulvinar vehicula</h6>
                      <p>Fusce convallis mattis felis, at fermentum quam finibus quis.</p>
                      <small className="text-muted">1 Day ago</small>
                    </div>
                  </li>
                  <li className="dropdown-notifications-item">
                    <img className="avatar avatar-md" src="media/images/avatars/5.png" alt="Avatars" />
                    <div className="is-block">
                      <h6>Sed vel arcu finibus, pharetra ipsum</h6>
                      <p>Duis a lobortis felis, vitae bibendum ex.</p>
                      <small className="text-muted">2 Day ago</small>
                    </div>
                  </li>
                </ul>
                <a
                  className="btn btn-outline-primary border-0 view-all-notification rounded-0 w-100"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  View all Notification
                </a>
              </div>
            )}
          </div>

          {/* User dropdown */}
          <div className="dropdown is-flex-shrink-0">
            <button className="bg-transparent border-0" type="button" onClick={toggleUser}>
              <img className="avatar avatar-sm" src="media/images/avatars/1.png" alt="Avatars" />
            </button>

            {userOpen && (
              <div className="dropdown-menu pt-1 pb-1">
                <a className="dropdown-item" href="profile.php">
                  Profile
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log("Logout clicked");
                  }}
                >
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
