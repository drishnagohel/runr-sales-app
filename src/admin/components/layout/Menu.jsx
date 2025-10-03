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
        <a class="menu-link" href="project">
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
          <span class="menu-title">Projects</span>
          <span class="tag bg-primary white-text rounded-pill">11</span>
        </a>
      </div>
      <div class="menu-item">
        <a class="menu-link" href="lead">
          <span class="menu-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-address-book">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z" />
              <path d="M10 16h6" />
              <path d="M13 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M4 8h3" />
              <path d="M4 12h3" />
              <path d="M4 16h3" />
            </svg>
          </span>
          <span class="menu-title">Leads</span>
          <span class="tag bg-primary white-text rounded-pill">2</span>
        </a>
      </div>
      <div class="menu-item">
        <a class="menu-link" href="users.php">
          <span class="menu-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-address-book">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z" />
              <path d="M10 16h6" />
              <path d="M13 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M4 8h3" />
              <path d="M4 12h3" />
              <path d="M4 16h3" />
            </svg>
          </span>
          <span class="menu-title">Enquiry Leads</span>
          <span class="tag bg-primary white-text rounded-pill">90</span>
        </a>
      </div>
      <div class="menu-item">
        <a class="menu-link" href="users.php">
          <span class="menu-icon">
             <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-cards"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.348 3.169l-7.15 3.113a2 2 0 0 0 -1.03 2.608l4.92 11.895a1.96 1.96 0 0 0 2.59 1.063l7.142 -3.11a2.002 2.002 0 0 0 1.036 -2.611l-4.92 -11.894a1.96 1.96 0 0 0 -2.588 -1.064z" /><path d="M16 3a2 2 0 0 1 1.995 1.85l.005 .15v3.5a1 1 0 0 1 -1.993 .117l-.007 -.117v-3.5h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" /><path d="M19.08 5.61a1 1 0 0 1 1.31 -.53c.257 .108 .505 .21 .769 .314a2 2 0 0 1 1.114 2.479l-.056 .146l-2.298 5.374a1 1 0 0 1 -1.878 -.676l.04 -.11l2.296 -5.371l-.366 -.148l-.402 -.167a1 1 0 0 1 -.53 -1.312z" /></svg>
          </span>
          <span class="menu-title">Careers</span>
          <span class="tag bg-primary white-text rounded-pill">8</span>
        </a>
      </div>
      <div class="menu-item">
        <a class="menu-link" href="users.php">
          <span class="menu-icon">
             <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-calendar-cog"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 21h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v5" /><path d="M16 3v4" /><path d="M8 3v4" /><path d="M4 11h16" /><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M19.001 15.5v1.5" /><path d="M19.001 21v1.5" /><path d="M22.032 17.25l-1.299 .75" /><path d="M17.27 20l-1.3 .75" /><path d="M15.97 17.25l1.3 .75" /><path d="M20.733 20l1.3 .75" /></svg>
          </span>
          <span class="menu-title">Reference Lead</span>
          <span class="tag bg-primary white-text rounded-pill">12</span>
        </a>
      </div>
      <div class="menu-item">
        <a class="menu-link" href="users.php">
          <span class="menu-icon">
             <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-book"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21.5 5.134a1 1 0 0 1 .493 .748l.007 .118v13a1 1 0 0 1 -1.5 .866a8 8 0 0 0 -7.5 -.266v-15.174a10 10 0 0 1 8.5 .708m-10.5 -.707l.001 15.174a8 8 0 0 0 -7.234 .117l-.327 .18l-.103 .044l-.049 .016l-.11 .026l-.061 .01l-.117 .006h-.042l-.11 -.012l-.077 -.014l-.108 -.032l-.126 -.056l-.095 -.056l-.089 -.067l-.06 -.056l-.073 -.082l-.064 -.089l-.022 -.036l-.032 -.06l-.044 -.103l-.016 -.049l-.026 -.11l-.01 -.061l-.004 -.049l-.002 -13.068a1 1 0 0 1 .5 -.866a10 10 0 0 1 8.5 -.707" /></svg>
          </span>
          <span class="menu-title">Partnership Lead</span>
          <span class="tag bg-primary white-text rounded-pill">98</span>
        </a>
      </div>      
      <div class="menu-item menu-accordion">
        <a class="menu-link" href="javascript:void(0);">
          <span class="menu-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-user-check">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
              <path d="M15 19l2 2l4 -4"></path>
            </svg>
          </span>
          <span class="menu-title">Attendance</span>
          <span class="menu-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M6 9l6 6l6 -6"></path>
            </svg>
          </span>
        </a>
        <div class="menu-sub menu-sub-accordion">
          <div class="menu-item">
            <a class="menu-link" href="#">
              <span class="menu-bullet">
                <span class="bullet bullet-dot"></span>
              </span>
              <span class="menu-title">Attendance Logs</span>
            </a>
          </div>
          <div class="menu-item menu-inner-accordion">
            <a href="javascript:void(0);" class="menu-link">
              <span class="menu-bullet">
                <span class="bullet bullet-dot"></span>
              </span>
              <span class="menu-title">Attendance Reports</span>
              <span class="menu-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M6 9l6 6l6 -6"></path>
                </svg>
              </span>
            </a>
            <div class="menu-sub menu-sub-inner-accordion">
              <div class="menu-item">
                <a class="menu-link" href="#">
                  <span class="menu-bullet">
                    <span class="bullet bullet-dot"></span>
                  </span>
                  <span class="menu-title">Attendance Reports 1</span>
                </a>
              </div>
              <div class="menu-item">
                <a class="menu-link" href="#">
                  <span class="menu-bullet">
                    <span class="bullet bullet-dot"></span>
                  </span>
                  <span class="menu-title">Attendance Reports 2</span>
                </a>
              </div>
            </div>
          </div>
          <div class="menu-item">
            <a class="menu-link" href="#">
              <span class="menu-bullet">
                <span class="bullet bullet-dot"></span>
              </span>
              <span class="menu-title">Attendance Requests</span>
            </a>
          </div>
          <div class="menu-item">
            <a class="menu-link" href="#">
              <span class="menu-bullet">
                <span class="bullet bullet-dot"></span>
              </span>
              <span class="menu-title">GEO Attendance</span>
            </a>
          </div>
        </div>
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
