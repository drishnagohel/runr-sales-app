import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateConfiguration, deleteProject } from "../../../api";

export default function ProjectRow({ project, refreshProjects }) {

  const navigate = useNavigate();

  const handleEdit = (guid) => {
  navigate(`/edit-page/${guid}`);
};

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
   const [isImageOpen, setIsImageOpen] = useState(false);
  const [title, setTitle] = useState(project.configuration_title);
  
  const [imageUrl, setImageUrl] = useState(""); // store current image  

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  const openDelete = () => setIsDeleteOpen(true);
  const closeDelete = () => setIsDeleteOpen(false);

   const openImage = (url) => {
    setImageUrl(url);
    setIsImageOpen(true);
  };
  const closeImage = () => setIsImageOpen(false);


  const handleSave = async (e) => {
    e.preventDefault();

    try {
      const data = {
        guid: project.guid,
        configuration_title: title
      };

      const result = await updateConfiguration(data);

      if (result.status) {
        // alert("Project updated successfully!");
        closeModal();
        refreshProjects(); // refresh parent table
      } else {
        alert("Failed to update project.");
      }
    } catch (error) {
      console.error("Error updating project:", error);
      alert("Something went wrong.");
    }
  };
  
  const handleDelete = async () => {
    try {
      const result = await deleteProject({ project_id: project.project_id });
      if (result.status) {
        
        closeDelete();
        refreshProjects(); // refresh parent table
      } else {
        alert("Failed to delete project.");
      }
    } catch (error) {
      console.error("Error deleting project:", error);
      alert("Something went wrong.");
    }
  };


  return (
    <>
      <tr className="project-row">
        <td className="project-id">{project.project_id}</td>
        <td>
          {project.project_logo_img_path && (
            <img
              src={project.project_logo_img_path}
              alt="Thumbnail"
              style={{
                width: "80px",       
                height: "50px",     
                borderRadius: "4px",
                cursor: "pointer",
                objectFit: "cover",  // maintain aspect ratio, crop if necessary
              }}
              onClick={() => openImage(project.project_logo_img_path)}
            />
          )}
        </td>

        <td>
          {project.project_featured_img_path && (
            <img
              src={project.project_featured_img_path}
              alt="Featured"
              style={{
                width: "80px",
                height: "50px",
                borderRadius: "4px",
                cursor: "pointer",
                objectFit: "cover",
              }}
              onClick={() => openImage(project.project_featured_img_path)}
            />
          )}
        </td>
        <td>
            
            <div class="btn rounded-pill btn-label-secondary text-capitalize">{project.project_title}</div>          
        </td>
      
        <td>
              {project.project_type === "Commercial" && (
                <span className="text-capitalize tag tag-success">Commercial</span>
              )}
              {project.project_type === "Office Spaces" && (
                <span className="text-capitalize tag btn-warning">Office Spaces</span>
              )}
              {project.project_type === "Residential" && (
                <span className="text-capitalize tag btn-primary">Residential</span>
              )}
              {project.project_type === "Mixed Use" && (
                <span className="text-capitalize tag btn-info">Mixed Used</span>
              )}

              {/* fallback if none match */}
              {!project.project_type && (
                <span className="text-capitalize tag btn-secondary">Unknown</span>
              )}
            </td>
           <td>
            <span
              className={`status-badge ${
                project.status === 1
                  ? "success"   // active
                  : project.status === 0
                  ? "danger"    
                  : "secondary" 
              }`}
            >
              {project.status === 1 ? "Active" : "Inactive"}
            </span>
          </td>
          <td>
          <div className="date-block">
            <span>
              {new Date(project.created_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
            <span>
              {new Date(project.created_at).toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
        </td>
        {/* <td> */}
          <td className="table-actions-wrapper">
            <div className="table-actions">
              <a onClick={() => handleEdit(project.guid)}>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path>
                    <path d="M13.5 6.5l4 4"></path>
                </svg>
              </a>
              <a onClick={openDelete}>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
      {/* </td> */}
      </tr>


      {/* Image Modal */}
      {isImageOpen && (
        <div className="modal-overlay" onClick={closeImage}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <img
              src={project.project_featured_img_path}
              alt={project.project_title}
              style={{ maxWidth: "100%", maxHeight: "80vh" }}
            />
            <button className="close-btn" onClick={closeImage}>
              ×
            </button>
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Edit Project</h2>
              <button className="close-btn" onClick={closeModal}>×</button>
            </div>

            <form className="modal-form" onSubmit={handleSave}>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="modal-actions">
                <button type="button" className="btn cancel" onClick={closeModal}>Cancel</button>
                <button type="submit" className="btn save">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}

{/* Image Modal */}
      {isImageOpen && (
        <div className="modal-overlay" onClick={closeImage}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <img src={imageUrl} alt="Project" style={{ maxWidth: "100%", maxHeight: "80vh" }} />
            <button className="close-btn" onClick={closeImage}>×</button>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
    {isDeleteOpen && (
      <div className="modal-overlay">
        <div className="modal">
          <div className="modal-header">
            <h2>Confirm Delete</h2>
            <button className="close-btn" onClick={closeDelete}>×</button>
          </div>
          <p>Are you sure you want to delete <strong>{project.project_title}</strong>?</p>
          <div className="modal-actions">
            <button className="btn cancel" onClick={closeDelete}>Cancel</button>
            <button className="btn save" onClick={handleDelete}>Delete</button>
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
                <span className="close-sidebar" onClick={() => setIsDeleteOpen(false)}>
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
                onSubmit={async (e) => {
                  e.preventDefault();
                  const inputValue = document.getElementById("delete-record").value;
                  
                  if (inputValue !== "DELETE") {
                    alert('Please type "DELETE" to confirm.');
                    return;
                  }

                  await handleDelete();
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
                      <input
                        type="hidden"
                        name="project_id"
                        id="delete-id"
                        value={project.project_id} 
                      />
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
