import React, { useState, useEffect } from "react";
import CreatorTable from "../Creator/CreatorTable";
import MasterLayout from "../../../components/layout/MasterLayout";
import Pagination from "../../../components/Pagination";
import { getAllBudget ,  addBudget} from "../../../../api";

export default function BudgetTable() {

  const [Budget, setBudget] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [totalCount, setTotalCount] = useState(0); 

  useEffect(() => {
  fetchBudget();
}, [currentPage, search]); 

  
  const fetchBudget = async () => {
    setLoading(true); 
    try {
      const offset = (currentPage - 1) * itemsPerPage;
      const result = await getAllBudget(offset, itemsPerPage, search);

      if (result?.status && Array.isArray(result.data)) {
        setBudget(result.data);
        setTotalCount(result.count || 0); // totalCount from API
      } else {
        setBudget([]);
        setTotalCount(0);
      }
    } catch (error) {
      console.error("Error fetching Budget:", error);
      setBudget([]);
      setTotalCount(0);
    } finally { 
      setLoading(false);
    }
  };

  // --- Fixed Search Filter ---
const filteredBudget = Budget.filter((p) =>  
  p.budget_name?.toLowerCase().includes(search.toLowerCase())  
);

// --- Pagination ---
const totalPages = Math.ceil(totalCount / itemsPerPage) || 1;  
const currentBudget = filteredBudget; // ✅ now maps filtered results

  const handlePageClick = (page) => {
  if (page >= 1 && page <= totalPages) {
      setCurrentPage(page); 
    }
   };
   
  return (
    <>
      <MasterLayout>        
        <div className="px-5 py-4">
          <div className="is-flex is-gap-4 is-align-items-center is-justify-content-space-between">
            <div className="card-title">
              <h1 className="fs-5 fw-600 lh-1">SMM</h1>
              <ul className="breadcrumbs mt-1">
                <li>
                  <a href="/masters">Masters</a>
                </li>
                <li className="active">SMM</li>
              </ul>
            </div>
            <div className="is-flex is-align-items-center is-justify-content-end is-gap-3">
              <div className="form-group mb-0">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setCurrentPage(1); 
                  }}
                />
              </div>
              {/* <button
                className="btn btn-icon btn-outline btn-outline-primary"
                onClick={() => setIsFilterOpen(true)} // ✅ sets state to true
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-filter" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227z"></path>
                </svg>
              </button> */}
              {/* <button
                className="btn btn-icon btn-outline btn-outline-primary"
                onClick={fetchBudget}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-refresh">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
                    <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
                </svg>
              </button> */}
              <button className="btn btn-primary">Add</button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="px-5 mb-5">
          <div className="card">
            <div className="card-body p-5">
              {loading ? (
                <p>Loading...</p>
              ) : filteredBudget.length === 0 ? (
                <p>No Budget found</p>
              ) : (
                <div className="text-nowrap theme-scrollbar-horizontal">
                  <table className="theme-table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentBudget.map((p) => (
                        <CreatorTable
                          key={p.id || p.budget_id}
                          project={p}
                          refreshDate={fetchBudget}
                          openDelete={() => setIsDeleteOpen(true)}
                        />
                      ))}
                    </tbody>
                  </table>
                  
                  {/* Pagination */}
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageClick}
                    totalItems={totalCount}
                    itemsPerPage={itemsPerPage}
                    startIndex={(currentPage - 1) * itemsPerPage}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </MasterLayout>

      {/* Filter Sidebar */}
      {isFilterOpen && (
        <div id="filter-sidebar" className={`theme-sidebar theme-sidebar-sm ${isFilterOpen ? "active" : ""}`}>
          <div className="theme-sidebar-card">
            {/* Header */}
            <div className="theme-sidebar-header">
              <h5 className="theme-sidebar-title">Filter</h5>
              <div className="theme-sidebar-action">
                <span className="close-sidebar" onClick={() => setIsFilterOpen(false)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M18 6l-12 12" />
                    <path d="M6 6l12 12" />
                  </svg>
                </span>
              </div>
            </div>

            {/* Sidebar Content */}
            <div className="theme-sidebar-detail">
              <form className="form">
                <div className="theme-sidebar-content theme-scrollbar">
                  <div className="card">
                    <div className="columns is-gapless">
                      <div className="column">
                        <div className="bg-gray-200 px-4 py-2">
                          <span className="fs-8 fw-500 gray-800">Select Date</span>
                        </div>
                        <div className="p-4">
                          <div className="form-group">
                            <label className="form-label">From Date</label>
                            <input
                              type="text"
                              className="form-control flatpickr-date flatpickr-input"
                              placeholder="DD-MM-YYYY"
                              id="from_date"
                              readOnly
                            />
                          </div>
                          <div className="form-group">
                            <label className="form-label">To Date</label>
                            <input
                              type="text"
                              className="form-control flatpickr-date"
                              id="to_date"
                              placeholder="DD-MM-YYYY"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="column">
                    <div className="form-group custom-select">
                      <label className="form-label">Project Type</label>
                      <select name="project_type_id" id="project_type_id" className="form-control select">
                        {/* Options will come dynamically */}
                      </select>
                    </div>
                  </div>

                  <div className="mt-5">
                    <button
                      type="button"
                      className="btn btn-primary w-100"
                      onClick={() => dateFilter()}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}


      {/* Delete Sidebar */}
    {isDeleteOpen && (
      <div id="delete-sidebar" className="theme-sidebar theme-sidebar-sm active">
        <div className="theme-sidebar-card">
          <div className="theme-sidebar-header">
            <h5 className="theme-sidebar-title">Delete</h5>
            <div className="theme-sidebar-action">
              <span
                className="close-sidebar"
                onClick={() => setIsDeleteOpen(false)}
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
                  className="icon icon-tabler icons-tabler-outline icon-tabler-x"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M18 6l-12 12" />
                  <path d="M6 6l12 12" />
                </svg>
              </span>
            </div>
          </div>

          <div className="theme-sidebar-detail">
            <form
              className="form"
              id="delete-sidebar-form"
              onSubmit={(e) => {
                e.preventDefault();
                // Handle delete action here
                console.log("Delete confirmed:", document.getElementById("delete-record").value);
              }}
            >
              <div className="theme-sidebar-content theme-scrollbar">
                <div className="columns is-multiline">
                  <div className="column is-12 col-form">
                    <div className="form-group">
                      <label className="form-label">
                        Type "DELETE" in Input Box*
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="delete-record"
                        placeholder="DELETE"
                        onChange={(e) =>
                          e.target.value = e.target.value.toUpperCase()
                        }
                      />
                    </div>
                  </div>
                  <div className="column is-12 col-form">
                    <input type="hidden" name="project_id" id="delete-id" />
                    <button className="btn btn-danger w-100" type="submit">
                      DELETE
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )}


    </>
  );
}
