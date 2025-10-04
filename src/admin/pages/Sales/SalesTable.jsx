  import React, { useState, useEffect } from "react";
  import MasterLayout from "../../components/layout/MasterLayout";
  import Pagination from "../../components/Pagination";
  import {
    getAllSales,
    addSales,
    updateSales,
    deleteSales,
    getAllSalesParson,
    getAllParson,
    getAllCreatorDropdown,
    getAllClientDropdown,
  } from "../../../api";
  import { getDateTab, getNameAvtarSingle, capitalizeFirstLetter } from "../../../utils";

  export default function SalesPersonTable() {
    const [salespersons, setSalespersons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [projectTypes, setProjectTypes] = useState([]);
    const [parsonName, setPasronName] = useState([]);
    const [creatorName, setCreatorName] = useState([]);
    const [clientName, setClientName] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const [totalCount, setTotalCount] = useState(0);

    // Sidebar states
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingPerson, setEditingPerson] = useState(null);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [deletePerson, setDeletePerson] = useState(null);

    useEffect(() => {
      fetchSalesPerson();
      fetchProjectTypes();
      fetchParsonName();
      fetchCreatorName();
      fetchClientName();
    }, [currentPage, search]);

    const fetchProjectTypes = async () => {
      try {
        const types = await getAllSalesParson();
        if (Array.isArray(types)) setProjectTypes(types);
      } catch (err) {
        console.error("Error fetching project types:", err);
      }
    };
    const fetchParsonName = async () => {
      try {
        const types = await getAllParson();
        if (Array.isArray(types)) setPasronName(types);
      } catch (err) {
        console.error("Error fetching person:", err);
      }
    };
    const fetchCreatorName = async () => {
      try {
        const types = await getAllCreatorDropdown();
        if (Array.isArray(types)) setCreatorName(types);
      } catch (err) {
        console.error("Error fetching project types:", err);
      }
    };
    const fetchClientName = async () => {
      try {
        const types = await getAllClientDropdown();
        if (Array.isArray(types)) setClientName(types);
      } catch (err) {
        console.error("Error fetching project types:", err);
      }
    };

    const fetchSalesPerson = async () => {
      setLoading(true);
      try {
        const offset = (currentPage - 1) * itemsPerPage;
        const result = await getAllSales(offset, itemsPerPage, search);

        if (result?.status && Array.isArray(result.data)) {
          setSalespersons(result.data);
          setTotalCount(result.count || 0);
        } else {
          setSalespersons([]);
          setTotalCount(0);
        }
      } catch (err) {
        console.error("Error fetching sales persons:", err);
        setSalespersons([]);
        setTotalCount(0);
      } finally {
        setLoading(false);
      }
    };

    const totalPages = Math.ceil(totalCount / itemsPerPage) || 1;

    const handlePageClick = (page) => {
      if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    const handleSave = async (formData) => {
      try {
        let result;
        if (formData.sales_details_id) result = await updateSales(formData);
        else result = await addSales(formData);

        if (result.status) {
          setIsFormOpen(false);
          setEditingPerson(null);
          fetchSalesPerson();
        } else alert("Failed to save Sales Person");
      } catch (err) {
        console.error("Error saving Sales Person:", err);
        alert("Something went wrong!");
      }
    };

    const handleDelete = async () => {
      try {
        if (!deletePerson) return;
        const result = await deleteSales({ sales_details_id: deletePerson.sales_details_id });
        if (result.status === 200 || result.status === true) {
          setIsDeleteOpen(false);
          setDeletePerson(null);
          fetchSalesPerson();
        } else alert("Failed to delete Sales Person");
      } catch (err) {
        console.error("Error deleting Sales Person:", err);
      }
    };

    return (
      <MasterLayout>
        {/* Header */}
        <div className="px-5 py-4 is-flex is-gap-4 is-align-items-center is-justify-content-space-between">
          <div className="card-title">
            <h1 className="fs-5 fw-600 lh-1">Sales Detile</h1>
            <ul className="breadcrumbs mt-1">
              <li>
                <a href="/masters">Masters</a>
              </li>
              <li className="active">Sales Detile</li>
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
                setEditingPerson(null);
                setIsFormOpen(true);
              }}
            >
              Add
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="px-5 mb-5">
          <div className="card">
            <div className="card-body p-5">
              {loading ? (
                <p>Loading...</p>
              ) : salespersons.length === 0 ? (
                <p>No Data Found</p>
              ) : (
                <div className="text-nowrap theme-scrollbar-horizontal">
                  <table className="theme-table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Social Media Manager</th>
                        <th>Sales Person</th>
                        <th>Creator</th>
                        <th>Client</th>
                        <th>Sales Date</th>
                        <th>Link</th>
                        <th>Date</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {salespersons.map((person) => (
                        <tr key={person.sales_details_id}>
                          <td>{person.sales_details_id}</td>
                          <td>
                            <div className="tag-rounded-wrapper">
                              <div className="tag-rounded tag-rounded-gray">
                                <span className="avatar avatar-md mw-unset">
                                  {getNameAvtarSingle(person?.salesmanger_name || "-")}
                                </span>
                                <div>
                                  <b>{capitalizeFirstLetter(person.salesmanger_name) || "-"}</b>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="tag-rounded-wrapper">
                              <div className="tag-rounded tag-rounded-gray">
                                <span className="avatar avatar-md mw-unset">
                                  {getNameAvtarSingle(person?.person_name || "-")}
                                </span>
                                <div>
                                  <b>{capitalizeFirstLetter(person.person_name) || "-"}</b>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="tag-rounded-wrapper">
                              <div className="tag-rounded tag-rounded-gray">
                                <span className="avatar avatar-md mw-unset">
                                  {getNameAvtarSingle(person?.creator_name || "-")}
                                </span>
                                <div>
                                  <b>{capitalizeFirstLetter(person.creator_name) || "-"}</b>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="tag-rounded-wrapper">
                              <div className="tag-rounded tag-rounded-gray">
                                <span className="avatar avatar-md mw-unset">
                                  {getNameAvtarSingle(person?.creator_name || "-")}
                                </span>
                                <div>
                                  <b>{capitalizeFirstLetter(person.creator_name) || "-"}</b>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="theme-date-list">
                              {getDateTab(person.sales_date, "Created At")}                              
                            </div>
                          </td>
                         <td>
                            {person.link ? (
                              <span className="view-value">
                                <a
                                  href={person.link}
                                  data-fancybox={`video-gallery-${person.sales_details_id}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <span className="tag tag-primary" title="View Resume">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20"
                                      height="20"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="icon icon-tabler icons-tabler-outline icon-tabler-link"
                                    >
                                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                      <path d="M9 15l6 -6" />
                                      <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                                      <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                                    </svg>
                                  </span>
                                </a>
                              </span>
                            ) : (
                              "-"
                            )}
                          </td>
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

        {/* Add/Edit Sidebar */}
        {isFormOpen && (
          <SalesPersonForm
            initialData={editingPerson}
            projectTypes={projectTypes}
            parsonName={parsonName}
            creatorName={creatorName}
            clientName={clientName}
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
  const SalesPersonForm = ({ initialData, projectTypes,parsonName,creatorName,clientName, onClose, onSave }) => {
   const [form, setForm] = useState({
      sales_details_id: initialData?.sales_details_id || null,
      smm: initialData?.smm || "",
      sales_person: initialData?.sales_person || "",
      creator: initialData?.creator || "",
      client: initialData?.client || "",
      sales_date: initialData?.sales_date
        ? new Date(initialData.sales_date).toLocaleDateString('en-CA')
        : "",
      link: initialData?.link || "",
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
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
              {form.sales_details_id ? "Edit Sales Person" : "Add Sales Detile"}
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
                    <label className="form-label">Social Marketing Manager*</label>
                    <select
                      className="form-control"
                       name="smm"
                        value={form.smm}
                        onChange={handleChange}
                        required
                    >
                      <option value="">Select Marketing Manager</option>
                      {projectTypes.map((pt) => (
                        <option key={pt.salesmanger_id} value={pt.salesmanger_id}>
                          {pt.salesmanger_name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="column is-12 col-form">
                    <label className="form-label">Sales Person*</label>
                    <select
                      name="sales_person"
                      className="form-control"
                      value={form.sales_person}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Sales Person</option>
                      {parsonName.map((pt) => (
                        <option key={pt.person_id} value={pt.person_id}>
                          {pt.person_name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="column is-12 col-form">
                    <label className="form-label">Select Creator*</label>
                    <select
                      name="creator"
                      className="form-control"
                      value={form.creator}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Creator</option>
                      {creatorName.map((pt) => (
                        <option key={pt.creator_id} value={pt.creator_id}>
                          {pt.creator_name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="column is-12 col-form">
                    <label className="form-label">Select Client*</label>
                    <select
                      name="client"
                      className="form-control"
                      value={form.client}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Creator</option>
                      {clientName.map((pt) => (
                        <option key={pt.client_id} value={pt.client_id}>
                          {pt.client_name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="column is-12 col-form">
                    <label className="form-label">Sales Date*</label>
                    <input
                      type="date"
                      name="sales_date"
                      className="form-control"
                      value={form.sales_date}
                      onChange={handleChange}
                      required
                    />
                  </div>     
                  <div className="column is-12 col-form">
                    <label className="form-label">Link*</label>
                    <input
                      type="text"
                      name="link"
                      className="form-control"
                      value={form.link}
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
                    <label className="form-label">Type "DELETE" to confirm</label>
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
