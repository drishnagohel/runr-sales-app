import React from "react";
import MasterLayout from "../components/layout/MasterLayout";

const MasterPage = () => {
  return (
    <>
    <MasterLayout>
  <div class="px-5 py-4">
  <div class="is-flex is-gap-4 is-align-items-center is-justify-content-space-between">
    <div class="card-title">
      <h1 class="fs-5 fw-600 lh-1"></h1>
      <ul class="breadcrumbs mt-1">
        <li>
          <a href="">Dashboard</a>
        </li>
        <li class="active"></li>
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
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-users">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
              <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
            </svg>
            <span>Users</span>
          </a>
        </div>
      </div>
    </div>          
    <div class="column col-master">
      <div class="card master-card">
        <div class="card-body">
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-box">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"></path>
              <path d="M12 12l8 -4.5"></path>
              <path d="M12 12l0 9"></path>
              <path d="M12 12l-8 -4.5"></path>
            </svg>
            <span>User Rights</span>
          </a>
        </div>
      </div>
    </div>          
    <div class="column col-master">
      <div class="card master-card">
        <div class="card-body">
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-text-caption">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 15h16"></path>
              <path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
              <path d="M4 20h12"></path>
            </svg>
            <span>Pages</span>
          </a>
        </div>
      </div>
    </div>     
    <div class="column col-master">
      <div class="card master-card">
        <div class="card-body">
          <a href="pincodes">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-map-pin">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
              <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
            </svg>
            <span>Pincode</span>
          </a>
        </div>
      </div>
    </div>   
    <div class="column col-master">
      <div class="card master-card">
        <div class="card-body">
          <a href="amenitycategory">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chart-pie">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M10 3.2a9 9 0 1 0 10.8 10.8a1 1 0 0 0 -1 -1h-6.8a2 2 0 0 1 -2 -2v-7a.9 .9 0 0 0 -1 -.8"></path>
              <path d="M15 3.5a9 9 0 0 1 5.5 5.5h-4.5a1 1 0 0 1 -1 -1v-4.5"></path>
            </svg>
            <span>Amenity Categories</span>
          </a>
        </div>
      </div>
    </div>          
    <div class="column col-master">
      <div class="card master-card">
        <div class="card-body">
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-box">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"></path>
              <path d="M12 12l8 -4.5"></path>
              <path d="M12 12l0 9"></path>
              <path d="M12 12l-8 -4.5"></path>
            </svg>
            <span>Amenities</span>
          </a>
        </div>
      </div>
    </div>          
    <div class="column col-master">
      <div class="card master-card">
        <div class="card-body">
          <a href="budget ">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-currency-rupee">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M18 5h-11h3a4 4 0 0 1 0 8h-3l6 6"></path>
              <path d="M7 9l11 0"></path>
            </svg>
            <span>Budgets</span>
          </a>
        </div>
      </div>
    </div>          
    <div class="column col-master">
      <div class="card master-card">
        <div class="card-body">
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-buildings">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 21v-15c0 -1 1 -2 2 -2h5c1 0 2 1 2 2v15" />
              <path d="M16 8h2c1 0 2 1 2 2v11" />
              <path d="M3 21h18" />
              <path d="M10 12v0" />
              <path d="M10 16v0" />
              <path d="M10 8v0" />
              <path d="M7 12v0" />
              <path d="M7 16v0" />
              <path d="M7 8v0" />
              <path d="M17 12v0" />
              <path d="M17 16v0" />
            </svg>
            <span>Construction Status</span>
          </a>
        </div>
      </div>
    </div>          
    <div class="column col-master">
      <div class="card master-card">
        <div class="card-body">
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chart-pie">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M10 3.2a9 9 0 1 0 10.8 10.8a1 1 0 0 0 -1 -1h-6.8a2 2 0 0 1 -2 -2v-7a.9 .9 0 0 0 -1 -.8"></path>
              <path d="M15 3.5a9 9 0 0 1 5.5 5.5h-4.5a1 1 0 0 1 -1 -1v-4.5"></path>
            </svg>
            <span>Configuration Types</span>
          </a>
        </div>
      </div>
    </div>          
    <div class="column col-master">
      <div class="card master-card">
        <div class="card-body">
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chart-pie">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M10 3.2a9 9 0 1 0 10.8 10.8a1 1 0 0 0 -1 -1h-6.8a2 2 0 0 1 -2 -2v-7a.9 .9 0 0 0 -1 -.8"></path>
              <path d="M15 3.5a9 9 0 0 1 5.5 5.5h-4.5a1 1 0 0 1 -1 -1v-4.5"></path>
            </svg>
            <span>Engagement Types</span>
          </a>
        </div>
      </div>
    </div>          
    <div class="column col-master">
      <div class="card master-card">
        <div class="card-body">
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-affiliate">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5.931 6.936l1.275 4.249m5.607 5.609l4.251 1.275" />
              <path d="M11.683 12.317l5.759 -5.759" />
              <path d="M5.5 5.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
              <path d="M18.5 5.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
              <path d="M18.5 18.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
              <path d="M8.5 15.5m-4.5 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0" />
            </svg>
            <span>Connectivity Types</span>
          </a>
        </div>
      </div>
    </div>          
    <div class="column col-master">
      <div class="card master-card">
        <div class="card-body">
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-stack">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 6l-8 4l8 4l8 -4l-8 -4" />
              <path d="M4 14l8 4l8 -4" />
            </svg>
            <span>Project Types</span>
          </a>
        </div>
      </div>
    </div>          
    <div class="column col-master">
      <div class="card master-card">
        <div class="card-body">
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-ruler-3">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M19.875 8c.621 0 1.125 .512 1.125 1.143v5.714c0 .631 -.504 1.143 -1.125 1.143h-15.875a1 1 0 0 1 -1 -1v-5.857c0 -.631 .504 -1.143 1.125 -1.143h15.75z"></path>
              <path d="M9 8v2"></path>
              <path d="M6 8v3"></path>
              <path d="M12 8v3"></path>
              <path d="M18 8v3"></path>
              <path d="M15 8v2"></path>
            </svg>
            <span>Size</span>
          </a>
        </div>
      </div>
    </div>
   

    
   
    <div class="column col-master">
      <div class="card master-card">
        <div class="card-body">
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-stackoverflow">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 17v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-1" />
              <path d="M8 16h8" />
              <path d="M8.322 12.582l7.956 .836" />
              <path d="M8.787 9.168l7.826 1.664" />
              <path d="M10.096 5.764l7.608 2.472" />
            </svg>
            <span>Gallery Categories</span>
          </a>
        </div>
      </div>
    </div>          
    <div class="column col-master">
      <div class="card master-card">
        <div class="card-body">
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-template">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z" />
              <path d="M4 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
              <path d="M14 12l6 0" />
              <path d="M14 16l6 0" />
              <path d="M14 20l6 0" />
            </svg>
            <span>Plan Types</span>
          </a>
        </div>
      </div>
    </div>          
    <div class="column col-master">
      <div class="card master-card">
        <div class="card-body">
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-refresh">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
              <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
            </svg>
            <span>Location Refrences</span>
          </a>
        </div>
      </div>
    </div>          
    <div class="column col-master">
      <div class="card master-card">
        <div class="card-body">
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-pin">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4" />
              <path d="M9 15l-4.5 4.5" />
              <path d="M14.5 4l5.5 5.5" />
            </svg>
            <span>Locations</span>
          </a>
        </div>
      </div>
    </div>      
    <div class="column col-master">
      <div class="card master-card">
        <div class="card-body">
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-category-2">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14 4h6v6h-6z" />
              <path d="M4 14h6v6h-6z" />
              <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M7 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            </svg>
            <span>Menu Locations</span>
          </a>
        </div>
      </div>
    </div>      
    <div class="column col-master">
      <div class="card master-card">
        <div class="card-body">
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-menu-2">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 6l16 0" />
              <path d="M4 12l16 0" />
              <path d="M4 18l16 0" />
            </svg>
            <span>Menu</span>
          </a>
        </div>
      </div>
    </div>      
    <div class="column col-master">
      <div class="card master-card">
        <div class="card-body">
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-percentage-66">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 3a9 9 0 1 1 -7.795 13.498l7.795 -4.498z" fill="currentColor" stroke="none" />
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            </svg>
            <span>Segment</span>
          </a>
        </div>
      </div>
    </div>      
    <div class="column col-master">
      <div class="card master-card">
        <div class="card-body">
          <a href="">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-device-ipad-question"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 21h-9a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6" /><path d="M9 18h5" /><path d="M19 22v.01" /><path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" /></svg>
            <span>Faq Type</span>
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
