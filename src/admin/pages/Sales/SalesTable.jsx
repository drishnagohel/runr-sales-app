import React, { useState, useEffect } from "react";
import MasterLayout from "../../components/layout/MasterLayout";
import Pagination from "../../components/Pagination";
import { getAllBudget, updateBudget, deleteBudget,getAllSalesParson,addBudget  } from "../../../api";
import { getDateTab } from "../../../utils";

export default function SalesTable() {
  const [Budget, setBudget] = useState([]);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Dropdown
  const [projectTypes, setSalesParson] = useState([]);
  // console.log("projectTypes",projectTypes);
  
  const [projectTypeId, setProjectTypeId] = useState("");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    fetchBudget();
    fetchProjectTypes();
  }, [currentPage, search]);

  const fetchProjectTypes = async () => {
  try {
    const types = await getAllSalesParson();
    if (Array.isArray(types)) {      
      setSalesParson(types);
    }
  } catch (err) {
    console.error("Error fetching project types:", err);
  }
};


  const fetchBudget = async () => {
    setLoading(true);
    try {
      const offset = (currentPage - 1) * itemsPerPage;
      const result = await getAllBudget(offset, itemsPerPage, search);

      if (result?.status && Array.isArray(result.data)) {
        setBudget(result.data);
        setTotalCount(result.count || 0);
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

  const totalPages = Math.ceil(totalCount / itemsPerPage) || 1;
  const filteredBudget = Budget.filter((p) =>
    p.budget_name?.toLowerCase().includes(search.toLowerCase())
  );

  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // 🔹 Inline Row Component
  const BudgetRow = ({ project }) => {
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [title, setTitle] = useState(project.budget_name);

    const handleSave = async (e) => {
      e.preventDefault();
      try {
        const data = { guid: project.guid, budget_name: title };
        const result = await updateBudget(data);
        if (result.status) {
          setIsEditOpen(false);
          fetchBudget();
        } else {
          alert("Failed to update budget.");
        }
      } catch (error) {
        console.error("Error updating budget:", error);
      }
    };

    // Handle Add Project
  const handleAdd = async (e) => {
    e.preventDefault();
    if (!newTitle) return;

    const formData = new FormData();
    formData.append("project_title", newTitle);
    formData.append("project_status", status);
    formData.append("project_type_id", projectTypeId)
    alert("thumbImage",thumbImage)
    if (thumbImage) formData.append("project_thumbmail_image", thumbImage);
  if (featuredImage) formData.append("project_featured_image", featuredImage);

    try {
      const result = await addBudget(formData); // API should handle multipart/form-data
      if (result && result.status) {
        setIsAddOpen(false);
        setNewTitle("");
        setThumbImage(null);
        setFeaturedImage(null);
        setStatus("Ongoing");
        setCurrentPage(1);
        fetchProjects();
      } else {
        alert("Failed to add project.");
      }
    } catch (error) {
      console.error("Error adding project:", error);
      alert("Something went wrong.");
    }
  };


    const handleDelete = async () => {
      try {
        const result = await deleteBudget({ budget_id: project.budget_id });
        if (result.status === 200) {
          fetchBudget();
          setIsDeleteOpen(false);
        } else {
          alert("Failed to delete budget.");
        }
      } catch (error) {
        console.error("Error deleting budget:", error);
      }
    };

    return (
      <>
        <tr>
          <td>{project.budget_id}</td>
          <td>
            <span className="tag tag-primary">{project.budget_name}</span>
          </td>
          <td>
            <div className="theme-date-list">
              {getDateTab(project.created_at, "Created At")}
              {getDateTab(project.updated_at, "Updated At")}
            </div>
          </td>
          <td className="table-actions-wrapper">
            <div className="table-actions">
              <a onClick={() => setIsEditOpen(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-pencil"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path>
                  <path d="M13.5 6.5l4 4"></path>
                </svg>
              </a>
              <a onClick={() => setIsDeleteOpen(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-trash"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M4 7l16 0"></path>
                  <path d="M10 11l0 6"></path>
                  <path d="M14 11l0 6"></path>
                  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                </svg>
              </a>
            </div>
          </td>
        </tr>

        {/* Edit Sidebar */}
        {isEditOpen && (
          <div className="theme-sidebar theme-sidebar-sm active">
            <div className="theme-sidebar-card">
              <div className="theme-sidebar-header">
                <h5 className="theme-sidebar-title">Edit Sales</h5>
                <div className="theme-sidebar-action">
                  <span
                    className="close-sidebar"
                    onClick={() => setIsEditOpen(false)}
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

              <div className="theme-sidebar-detail edit-form">
                <form
                  className="form"
                  id="edit-budget-sidebar-form"
                  onSubmit={handleSave}
                >
                  <div className="theme-sidebar-content theme-scrollbar">
                    <div className="columns is-multiline">
                      <div className="column is-12 col-form">
                        <div className="form-group">
                          <label className="form-label">Budget Name*</label>
                          <input
                            type="text"
                            name="budget_name"
                            id="edit_budget_name"
                            className="form-control"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="column is-12 col-form">
                        <button className="btn btn-primary w-100" type="submit">
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Delete Sidebar */}
        {isDeleteOpen && (
          <div
            id="delete-sidebar"
            className="theme-sidebar theme-sidebar-sm active"
          >
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
  };

  return (
    <MasterLayout>
      <div className="px-5 py-4">
        <div className="is-flex is-gap-4 is-align-items-center is-justify-content-space-between">
          <div className="card-title">
            <h1 className="fs-5 fw-600 lh-1">Sales</h1>
            <ul className="breadcrumbs mt-1">
              <li>
                <a href="/masters">Masters</a>
              </li>
              <li className="active">Sales</li>
            </ul>
          </div>
          <div className="is-flex is-align-items-center is-justify-content-end is-gap-3">
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
            <button
              className="btn btn-primary"
              onClick={() => setIsAddOpen(true)}
            >
              Add
            </button>
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
                    {filteredBudget.map((p) => (
                      <BudgetRow key={p.guid || p.budget_id} project={p} />
                    ))}
                  </tbody>
                </table>

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

     {/* Add Sidebar */}
      {isAddOpen && (
        <div className="theme-sidebar theme-sidebar-sm active">
          <div className="theme-sidebar-card">
            <div className="theme-sidebar-header">
              <h5 className="theme-sidebar-title">Add Sales</h5>
              <div className="theme-sidebar-action">
                <span className="close-sidebar" onClick={() => setIsAddOpen(false)}>
                  ✕
                </span>
              </div>
            </div>

            <div className="theme-sidebar-detail add-form">
              <form
                className="form"
                id="add-budget-sidebar-form"
                onSubmit={async (e) => {
                  e.preventDefault();

                  const formData = {
                    time: document.getElementById("time").value,
                    link: document.getElementById("link").value,
                    month: document.getElementById("month").value,
                    year: document.getElementById("year").value,
                    sales_person: document.getElementById("sales_person").value,
                    creator: document.getElementById("creator").value,
                    project_type_id: document.getElementById("project_type").value,
                  };

                  try {
                    const result = await addBudget(formData); // 🔹 API call
                    if (result && result.status) {
                      alert("Budget added successfully!");
                      setIsAddOpen(false);
                      fetchBudget(); // Refresh table
                    } else {
                      alert("Failed to add budget.");
                    }
                  } catch (error) {
                    console.error("Error adding budget:", error);
                    alert("Something went wrong!");
                  }
                }}
              >
                <div className="theme-sidebar-content theme-scrollbar">
                  <div className="columns is-multiline">
                    {/* Time */}
                    <div className="column is-12 col-form">
                      <div className="form-group">
                        <label className="form-label">Time*</label>
                        <input type="text" id="time" className="form-control" required />
                      </div>
                    </div>

                    {/* Link */}
                    <div className="column is-12 col-form">
                      <div className="form-group">
                        <label className="form-label">Link*</label>
                        <input type="text" id="link" className="form-control" required />
                      </div>
                    </div>

                    {/* Month */}
                    <div className="column is-12 col-form">
                      <div className="form-group">
                        <label className="form-label">Month*</label>
                        <input type="text" id="month" className="form-control" required />
                      </div>
                    </div>

                    {/* Year */}
                    <div className="column is-12 col-form">
                      <div className="form-group">
                        <label className="form-label">Year*</label>
                        <input type="text" id="year" className="form-control" required />
                      </div>
                    </div>

                    {/* Project Type Dropdown */}
                    <div className="column is-12 col-form">
                      <div className="form-group custom-select">
                        <label className="form-label">Project Type*</label>
                        <select id="project_type" className="form-control" required>
                          <option value="">Select Project Type</option>
                          {projectTypes.map((pt) => (
                            <option key={pt.configuration_type_id} value={pt.configuration_type_id}>
                              {pt.configuration_type}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Sales Person */}
                    <div className="column is-12 col-form">
                      <div className="form-group">
                        <label className="form-label">Sales Person*</label>
                        <input type="text" id="sales_person" className="form-control" required />
                      </div>
                    </div>

                    {/* Creator */}
                    <div className="column is-12 col-form">
                      <div className="form-group">
                        <label className="form-label">Creator*</label>
                        <input type="text" id="creator" className="form-control" required />
                      </div>
                    </div>

                    {/* Submit */}
                    <div className="column is-12 col-form">
                      <button className="btn btn-primary w-100" type="submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

    </MasterLayout>
  );
}
