import React from "react";
import MasterLayout from "../components/layout/MasterLayout";

const Dashboard = () => {
  return (
    <MasterLayout>
      <div class="px-5 py-4">
        <div class="card-title">
          <h1 class="fs-5 fw-600 lh-1">Dashboard</h1>
        </div>
      </div>
      <div class="px-5">
        <div class="mb-3">
          <div class="columns is-mobile is-multiline row-dashboard">
            <div class="column is-6-mobile is-6-tablet is-3-desktop is-3-widescreen col-dashboard">
              <div class="card dashboard-card">
                <div class="dashboard-detail">
                  <div class="dashboard-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-users">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                      <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                    </svg>
                  </div>
                  <div class="dashboard-desc">
                    <h3>108</h3>
                    <span>User</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-6-mobile is-6-tablet is-3-desktop is-3-widescreen col-dashboard">
              <div class="card dashboard-card">
                <div class="dashboard-detail">
                  <div class="dashboard-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-message">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M8 9h8"></path>
                    <path d="M8 13h6"></path>
                    <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"></path>
                  </svg>
                  </div>
                  <div class="dashboard-desc">
                    <h3>32</h3>
                    <span>Post</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-6-mobile is-6-tablet is-3-desktop is-3-widescreen col-dashboard">
              <div class="card dashboard-card">
                <div class="dashboard-detail">
                  <div class="dashboard-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-cards">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3.604 7.197l7.138 -3.109a.96 .96 0 0 1 1.27 .527l4.924 11.902a1 1 0 0 1 -.514 1.304l-7.137 3.109a.96 .96 0 0 1 -1.271 -.527l-4.924 -11.903a1 1 0 0 1 .514 -1.304z" />
                    <path d="M15 4h1a1 1 0 0 1 1 1v3.5" />
                    <path d="M20 6c.264 .112 .52 .217 .768 .315a1 1 0 0 1 .53 1.311l-2.298 5.374" />
                  </svg>
                  </div>
                  <div class="dashboard-desc">
                    <h3>3</h3>
                    <span>Page</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-6-mobile is-6-tablet is-3-desktop is-3-widescreen col-dashboard">
              <div class="card dashboard-card">
                <div class="dashboard-detail">
                  <div class="dashboard-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-users">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                      <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                    </svg>
                  </div>
                  <div class="dashboard-desc">
                    <h3>8</h3>
                    <span>Youthwille Visitor</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        </div>        
      
    </MasterLayout>
  );
};

export default Dashboard;
