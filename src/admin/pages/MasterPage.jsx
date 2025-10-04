import React from "react";
import MasterLayout from "../components/layout/MasterLayout";

const MasterPage = () => {
  return (
    <>
  <MasterLayout>
  <div class="px-5 py-4">
  <div class="is-flex is-gap-4 is-align-items-center is-justify-content-space-between">
    <div class="card-title">
      <h1 class="fs-5 fw-600 lh-1">Masters</h1>
      <ul class="breadcrumbs mt-1">
        <li>
          <a href="dashboard">Dashboard</a>
        </li>
        <li class="active">Masters</li>
      </ul>
    </div>
    <div class="is-flex is-align-items-center is-justify-content-end is-gap-3">
      <div class="form-group mb-0">
        <input type="text" class="form-control" id="search-input" placeholder="Search"/>
      </div>
    </div>
  </div>
</div>
<div class="px-5 mb-5">
  <div class="columns is-multiline">   
    <div class="column col-master">
      <div class="card master-card">
        <div class="card-body">
          <a href="salesperson">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-users">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
              <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
            </svg>
            <span>Sales Person</span>
          </a>
        </div>
      </div>
    </div>          
    <div class="column col-master">
      <div class="card master-card">
        <div class="card-body">
          <a href="client">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-box">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"></path>
              <path d="M12 12l8 -4.5"></path>
              <path d="M12 12l0 9"></path>
              <path d="M12 12l-8 -4.5"></path>
            </svg>
            <span>Client</span>
          </a>
        </div>
      </div>
    </div>                       
    <div class="column col-master">
      <div class="card master-card">
        <div class="card-body">
          <a href="creator">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chart-pie">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M10 3.2a9 9 0 1 0 10.8 10.8a1 1 0 0 0 -1 -1h-6.8a2 2 0 0 1 -2 -2v-7a.9 .9 0 0 0 -1 -.8"></path>
              <path d="M15 3.5a9 9 0 0 1 5.5 5.5h-4.5a1 1 0 0 1 -1 -1v-4.5"></path>
            </svg>
            <span>Creator</span>
          </a>
        </div>
      </div>
    </div>          
    <div class="column col-master">
      <div class="card master-card">
        <div class="card-body">
          <a href="smm">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-box">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"></path>
              <path d="M12 12l8 -4.5"></path>
              <path d="M12 12l0 9"></path>
              <path d="M12 12l-8 -4.5"></path>
            </svg>
            <span>SMM</span>
          </a>
        </div>
      </div>
    </div>                           
  </div>
</div>  
      
    </MasterLayout>
    </>
  );
};

export default MasterPage;
