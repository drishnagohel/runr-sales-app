import React from "react";

const Menu = () => {
  return (
   <div id="theme-menu" class="theme-menu-wrapper">
  <a class="theme-menu-toggle" href="javascript:void(0);">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevrons-right">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 7l5 5l-5 5" />
      <path d="M13 7l5 5l-5 5" />
    </svg>
  </a>
  <a id="theme-menu-close-button" class="theme-menu-close-button" href="javascript:void(0);">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-x">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  </a>
  <div class="theme-menu-logo">
    <img class="theme-menu-logo-default" src="media/images/logo-dark.svg" alt="Logo" />
    <img class="theme-menu-logo-minimize" src="media/images/inso-owl-logo.svg" alt="Logo" />
  </div>
  <div class="theme-menu-detail theme-scrollbar">
    <div class="menu-item-wrapper">
      <div class="menu-item">
        <a class="menu-link" href="dashboard">
          <span class="menu-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-dashboard">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 13m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M13.45 11.55l2.05 -2.05" />
              <path d="M6.4 20a9 9 0 1 1 11.2 0z" />
            </svg>
          </span>
          <span class="menu-title">Dashboard</span>
        </a>
      </div>
      <div class="menu-item">
        <a class="menu-link" href="sales">
          <span class="menu-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-buildings">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 21v-15c0 -1 1 -2 2 -2h5c1 0 2 1 2 2v15"></path>
              <path d="M16 8h2c1 0 2 1 2 2v11"></path>
              <path d="M3 21h18"></path>
              <path d="M10 12v0"></path>
              <path d="M10 16v0"></path>
              <path d="M10 8v0"></path>
              <path d="M7 12v0"></path>
              <path d="M7 16v0"></path>
              <path d="M7 8v0"></path>
              <path d="M17 12v0"></path>
              <path d="M17 16v0"></path>
            </svg>
          </span>
          <span class="menu-title">Sales</span>
          <span class="tag bg-primary white-text rounded-pill">11</span>
        </a>
      </div>      
      <div class="menu-item">
        <a class="menu-link" href="masters">
          <span class="menu-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-cube">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M21 16.008v-8.018a1.98 1.98 0 0 0 -1 -1.717l-7 -4.008a2.016 2.016 0 0 0 -2 0l-7 4.008c-.619 .355 -1 1.01 -1 1.718v8.018c0 .709 .381 1.363 1 1.717l7 4.008a2.016 2.016 0 0 0 2 0l7 -4.008c.619 -.355 1 -1.01 1 -1.718z"></path>
              <path d="M12 22v-10"></path>
              <path d="M12 12l8.73 -5.04"></path>
              <path d="M3.27 6.96l8.73 5.04"></path>
            </svg>
          </span>
          <span class="menu-title">Masters</span>
        </a>
      </div>
    </div>
  </div>
</div>
  );
};

export default Menu;
