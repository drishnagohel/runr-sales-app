import React, { useState, useEffect } from "react";
import MasterLayout from "../../../components/layout/MasterLayout";
import Pagination from "../../../components/Pagination";
import {
  getAllSalesperson,
  addSalesperson,
  updateSalesperson,
  deleteSalesperson,
} from "../../../../api";
import { getDateTab ,getNameAvtarSingle,capitalizeFirstLetter} from "../../../../utils";

export default function SalesPersonTable() {
  const [salespersons, setSalespersons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [totalCount, setTotalCount] = useState(0);

  // Sidebar State
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingPerson, setEditingPerson] = useState(null);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [deletePerson, setDeletePerson] = useState(null);

  useEffect(() => {
    fetchSalesPerson();
  }, [currentPage, search]);

  const fetchSalesPerson = async () => {
    setLoading(true);
    try {
      const offset = (currentPage - 1) * itemsPerPage;
      const result = await getAllSalesperson(offset, itemsPerPage, search);

      if (result?.status && Array.isArray(result.data)) {
        setSalespersons(result.data);
        setTotalCount(result.count || 0);
      } else {
        setSalespersons([]);
        setTotalCount(0);
      }
    } catch (error) {
      console.error("Error fetching Sales Persons:", error);
      setSalespersons([]);
      setTotalCount(0);
    } finally {
      setLoading(false);
    }
  };

  const totalPages = Math.ceil(totalCount / itemsPerPage) || 1;

  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleSave = async (formData) => {
    try {
      let result;
      if (formData.person_id) {
        // update
        result = await updateSalesperson(formData);
      } else {
        // add
        result = await addSalesperson(formData);
      }

      if (result.status) {
        setIsFormOpen(false);
        setEditingPerson(null);
        fetchSalesPerson();
      } else {
        alert("Failed to save Sales Person");
      }
    } catch (error) {
      console.error("Error saving Sales Person:", error);
      alert("Something went wrong!");
    }
  };

  const handleDelete = async () => {
    try {
      if (!deletePerson) return;
      const result = await deleteSalesperson({ person_id: deletePerson.person_id });
      if (result.status === 200 || result.status === true) {
        setIsDeleteOpen(false);
        setDeletePerson(null);
        fetchSalesPerson();
      } else {
        alert("Failed to delete Sales Person");
      }
    } catch (error) {
      console.error("Error deleting Sales Person:", error);
    }
  };

  return (
    <MasterLayout>
      <div className="px-5 py-4">
        <div className="is-flex is-gap-4 is-align-items-center is-justify-content-space-between">
          <div className="card-title">
            <h1 className="fs-5 fw-600 lh-1">Sales Person</h1>
            <ul className="breadcrumbs mt-1">
              <li>
                <a href="/masters">Masters</a>
              </li>
              <li className="active">Sales Person</li>
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
              onClick={() => {
                setEditingPerson(null); // fresh add
                setIsFormOpen(true);
              }}
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
            ) : salespersons.length === 0 ? (
              <p>No Sales Person found</p>
            ) : (
              <div className="text-nowrap theme-scrollbar-horizontal">
                <table className="theme-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Mobile</th>
                      <th>Email</th>
                      <th>Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {salespersons.map((person) => (
                      <tr key={person.person_id}>                       
                        <td>{person.person_id}</td>
                         <td>
                          <div className="tag-rounded-wrapper">
                            <div className="tag-rounded tag-rounded-gray">
                              <span className="avatar avatar-md mw-unset">
                                {getNameAvtarSingle(person?.person_name || "-")}
                              </span>
                              <div>
                                <b>
                                  {capitalizeFirstLetter(person.person_name) || "-"}{" "}
                                  {/* {capitalizeFirstLetter(person.last_name) || "-"} */}
                                </b>
                              </div>
                            </div>
                          </div>
                        </td>                        
                        <td>{person.person_mobile}</td>
                        <td>{person.person_email}</td>
                        <td>
                          <div className="theme-date-list">
                            {getDateTab(person.created_at, "Created At")}
                            {getDateTab(person.updated_at, "Updated At")}
                          </div>
                        </td>
                        <td>
                          <div className="table-actions">
                            <a
                              onClick={() => {
                                setEditingPerson(person);
                                setIsFormOpen(true);
                              }}
                            >
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
                            <a
                              onClick={() => {
                                setDeletePerson(person);
                                setIsDeleteOpen(true);
                              }}
                            >
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

      {/* Add / Edit Sidebar */}
      {isFormOpen && (
        <SalesPersonForm
          initialData={editingPerson}
          onClose={() => {
            setIsFormOpen(false);
            setEditingPerson(null);
          }}
          onSave={handleSave}
        />
      )}

      {/* Delete Sidebar */}
      {isDeleteOpen && (
        <DeleteConfirm
          onClose={() => {
            setIsDeleteOpen(false);
            setDeletePerson(null);
          }}
          onConfirm={handleDelete}
        />
      )}
    </MasterLayout>
  );
}

/* ---------------- Form Component ---------------- */
const SalesPersonForm = ({ initialData, onClose, onSave }) => {
  const [form, setForm] = useState({
    person_id: initialData?.person_id || null,
    person_name: initialData?.person_name || "",
    person_mobile: initialData?.person_mobile || "",
    person_email: initialData?.person_email || "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <div className="theme-sidebar theme-sidebar-sm active">
      <div className="theme-sidebar-card">
        <div className="theme-sidebar-header">
          <h5 className="theme-sidebar-title">
            {form.person_id ? "Edit Sales Person" : "Add Sales Person"}
          </h5>
          <div className="theme-sidebar-action">
            <span className="close-sidebar" onClick={onClose}>
              ✖
            </span>
          </div>
        </div>

        <div className="theme-sidebar-detail">
          <form className="form" onSubmit={handleSubmit}>
            <div className="theme-sidebar-content theme-scrollbar">
              <div className="columns is-multiline">
                <div className="column is-12 col-form">
                  <label className="form-label">Name*</label>
                  <input
                    type="text"
                    name="person_name"
                    className="form-control"
                    value={form.person_name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="column is-12 col-form">
                  <label className="form-label">Mobile*</label>
                  <input
                    type="text"
                    name="person_mobile"
                    className="form-control"
                    value={form.person_mobile}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="column is-12 col-form">
                  <label className="form-label">Email*</label>
                  <input
                    type="email"
                    name="person_email"
                    className="form-control"
                    value={form.person_email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="column is-12 col-form">
                  <button className="btn btn-primary w-100" type="submit">
                    {form.person_id ? "Save Changes" : "Add"}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

/* ---------------- Delete Component ---------------- */
const DeleteConfirm = ({ onClose, onConfirm }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue !== "DELETE") {
      alert('Please type "DELETE" to confirm.');
      return;
    }
    onConfirm();
  };

  return (
    <div className="theme-sidebar theme-sidebar-sm active">
      <div className="theme-sidebar-card">
        <div className="theme-sidebar-header">
          <h5 className="theme-sidebar-title">Delete</h5>
          <div className="theme-sidebar-action">
            <span className="close-sidebar" onClick={onClose}>
              ✖
            </span>
          </div>
        </div>

        <div className="theme-sidebar-detail">
          <form onSubmit={handleSubmit}>
            <div className="theme-sidebar-content theme-scrollbar">
              <div className="columns is-multiline">
                <div className="column is-12 col-form">
                  <label className="form-label">
                    Type "DELETE" to confirm
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value.toUpperCase())}
                  />
                </div>
                <div className="column is-12 col-form">
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
  );
};
